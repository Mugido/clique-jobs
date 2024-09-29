import {Outlet} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserNavbar from '../../components/usercomponents/UserNavbar';


const UserMainLayout = () => {
  return (
    <>
    <UserNavbar/>
    <Outlet/>
    <ToastContainer />
    </>
  );
};

export default UserMainLayout