import { useContext, useEffect, useState } from 'react';
import './login.scss';
// import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
// import React from 'react';
import UserStore from '../../stores/userStore';
import ToastUtil from '../../components/toast/toastUtil';
import { Btn } from '../../models/models';

interface Props {
  setActivePage: (page) => void;
  onClose: (val) => void;
  show: boolean;
}

const Login = (props: Props) => {
  const [show, setShow] = useState(false);
  const userStore = useContext(UserStore);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    userStore.fullName = data.fullName;
    userStore.password = data.password;
    await userStore.authenticateUser();
    if (!userStore.isLoging) ToastUtil.error('Nooo');
    else {
      closeHandler(false);
      return props.setActivePage(Btn.Submissions);
    }
  };

  return (
    <div
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0',
      }}
      className={'overlay'}
    >
      <div className={'popup'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section>
            <h1>Login</h1>
            <div className={'field'}>
              <label htmlFor="fullName" className={'fieldText'}>
                FullName:
              </label>
              <input
                id="fullName"
                {...register('fullName', {
                  required: 'required',
                })}
                type="fullName"
                placeholder="FullName"
              />
            </div>
            <div className={'field'}>
              <label htmlFor="password" className={'fieldText'}>
                Password:
              </label>
              <input
                id="password"
                {...register('password', {
                  required: 'required',
                })}
                type="password"
                placeholder="Password"
              />
            </div>
            <button type="submit">SUBMIT</button>
          </section>
        </form>
      </div>
    </div>
  );
};

// Login.propTypes = {
//   title: PropTypes.string.isRequired,
//   show: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

export default Login;
