import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";


function App() {
  return (
  <div className="App">
    <RoutesApp/>
    <ToastContainer autoClose={3000} />
    </div>
    );
}

export default App;
