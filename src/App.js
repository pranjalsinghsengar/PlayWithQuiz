import { useContext, useEffect, useState } from "react";
import "./App.css";
import Main from "./Main";
// import Header from "./pages/Header";
// import SideNav from "./pages/SideNav";
import Login from "./pages/login/Login";
import Routers from "./routes/Routers";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AppContext } from "./Context";

function App() {
  const { userData, setUserData, loginID } = useContext(AppContext);
  // const [exited, setexited] = useState("");

  // const isLoggedIn = userData !== null;
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (loginID == null) {
  //     navigate("/");
  //     console.warn(" app js loginID");
  //   }
  // },[]);

  return <>{loginID ? <Main /> : <Login />}</>;
}

export default App;
