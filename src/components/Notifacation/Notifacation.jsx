// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
// import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export const Notification = (name) => {
    return toast.warn(`no contact`) 
};




Notification.propTypes = {
    name: PropTypes.string.isRequired,
  };