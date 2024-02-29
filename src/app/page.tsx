import { ToastContainer } from "react-toastify";
import Login from "./login/page";
import 'react-toastify/dist/ReactToastify.css';

export function Home() {
  return (
    <>
      <ToastContainer/>
      <Login/>
    </>
  );
}

export default Home;
