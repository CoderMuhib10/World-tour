import "./App.css";
import Countries from "./assets/components/Countries";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>

        <Countries></Countries>
    </>
  );
}

export default App;
