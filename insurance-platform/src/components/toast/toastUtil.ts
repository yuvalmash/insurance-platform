import { toast } from 'react-toastify';
import './styles.min.scss';
class ToastUtil {
  success = (message: string) => {
    toast.success(message, {
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0,
    });
  };
  error = (message: string) => {
    toast.error(message, {
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0,
    });
  };
}

export default new ToastUtil();
