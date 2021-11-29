import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import './action.styles.scss';
import UserStore from '../../stores/userStore';
import CurrentDataStore from '../../stores/currentDataStore';
import { Btn, draftFormValues, FormValues, Status } from '../../models/models';

interface Props {
  setActivePage: (page) => void;
}

function Action(props: Props) {
  const userStore = useContext(UserStore);
  const currentDataStore = useContext(CurrentDataStore);
  const [isCreateNewMode, setCreateNewMode] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      id: currentDataStore.id ? currentDataStore.id : '',
      companyName: currentDataStore.companyName ? currentDataStore.companyName : '',
      address: currentDataStore?.address ? currentDataStore.address : '',
      status: currentDataStore?.status ? currentDataStore.status : Status.NEW,
      annualRevenue: currentDataStore?.annualRevenue ? currentDataStore.annualRevenue : 0,
      signedApplication: currentDataStore?.signedApplication ? currentDataStore?.signedApplication : '',
      submittedBy: currentDataStore?.submittedBy ? currentDataStore.submittedBy : '',
    },
  });

  useEffect(() => {
    if (currentDataStore.id === '') {
      reset(draftFormValues);
      setCreateNewMode(true);
    } else setCreateNewMode(false);
  }, []);

  const onSubmit = (data) => {
    if (currentDataStore.allSubmissions.some((submission) => submission.id === data.id)) {
      currentDataStore.setData(data);
      currentDataStore.createOrUpdateNewSubmission(data);
      props.setActivePage(Btn.Submissions);
      return reset();
    } else {
      const newUserId = uuidv4();
      data.id = newUserId;
      data.status = Status.NEW;
      data.submittedBy = userStore.fullName;

      currentDataStore.setData(data);
      currentDataStore.createOrUpdateNewSubmission(data);

      props.setActivePage(Btn.Bind);
      return reset();
    }
  };

  return (
    <div className="container">
      <div className="title">{isCreateNewMode ? 'Create New Submission' : 'Update Submission'}</div>

      <form className="formFields" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder={!isCreateNewMode ? currentDataStore.companyName : 'Company Name'} {...register('companyName')} />
        <input type="text" placeholder={!isCreateNewMode ? currentDataStore.address : 'Address'} {...register('address')} />

        <input
          type="number"
          placeholder={!isCreateNewMode ? currentDataStore.annualRevenue.toString() : 'Annual Revenue'}
          {...register('annualRevenue', { valueAsNumber: true })}
        />

        <input className="submitBtn" type="submit" />
      </form>
      <button
        className="clrBtn"
        type="button"
        onClick={() => {
          currentDataStore.clearCurrentSubmission();
          setCreateNewMode(true);
          reset(draftFormValues);
        }}
      >
        Create New
      </button>
    </div>
  );
}

export default Action;
