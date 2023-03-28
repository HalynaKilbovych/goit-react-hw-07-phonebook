import { PhoneBookApp } from "./PhonebookApp/PhoneBookApp";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export const App = () => {
  return (
    <>
    <ToastContainer/>
      <PhoneBookApp />
    </>
  );
};
