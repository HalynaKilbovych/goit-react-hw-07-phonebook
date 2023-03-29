
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export const notificationSameName = (name) => {
  return toast.warn(`OOPS! ${name} is already in contacts`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const notificationSameNumber = (number) => {
  return toast.warn(`Number ${number} is already in contacts`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const notificationNoContact = () => {
  return toast.warn(`There are no contacts here`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const notificationError = () => {
  return toast.error(`OOPS! Something is wrong`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}; 

notificationSameName.propTypes = {
  name: PropTypes.string.isRequired,
};