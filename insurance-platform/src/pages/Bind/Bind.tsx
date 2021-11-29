import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Bind.scss';
import CurrentDataStore from '../../stores/currentDataStore';
import UserStore from '../../stores/userStore';
import { Btn, Status } from '../../models/models';
import ToastUtil from '../../components/toast/toastUtil';

interface Props {
  setActivePage: (page) => void;
}

export const Bind = (props: Props) => {
  const { register, handleSubmit } = useForm();
  const currentDataStore = useContext(CurrentDataStore);
  const userStore = useContext(UserStore);

  const onSubmit = async (data) => {
    if (data.picture[0]?.name === undefined) return ToastUtil.error('Please select a PDF file');
    if (data.picture[0].name.split('.')[data.picture[0].name.split('.').length - 1] !== 'pdf') {
      return ToastUtil.error('Please select a PDF file');
    }

    const formData = new FormData();
    formData.append('picture', data.picture[0]);

    await currentDataStore
      .uploadFile(userStore.fullName, data.picture[0].name, formData)
      .then((res) => {
        if (res === 500) return ToastUtil.error(`Got status ${res} from the server`);
        if (res === 200) {
          const currentSubmission = currentDataStore.getCurrentSubmission();
          currentSubmission.status = Status.BOUND;
          currentSubmission.submittedBy = userStore.fullName;
          currentSubmission.signedApplication = '';
          currentSubmission.signedApplication = data.picture[0].name;
          currentDataStore.createOrUpdateNewSubmission(currentSubmission);
          props.setActivePage(Btn.Submissions);
          ToastUtil.success('PDF file uploaded successfully');
        }
      })
      .catch(() => {
        ToastUtil.error('cant uploaded PDF file');
      });
  };

  return (
    <div>
      <div className="title">Please upload a signed pdf application</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('picture')} type="file" name="picture" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Bind;
