import React, { useContext, useEffect } from "react";
import Login from "../pages/login/Login";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SideNav from "../pages/SideNav";
import Home from "../pages/Home";
import AllQuizes from "../pages/AllQuizes";
import Upcoming from "../pages/Upcoming";
import InitiateForm from "../pages/InitiateForm";
import AddQuestions from "../pages/AddQuestions";
import { AppContext } from "../Context";
import ChooseType from "../pages/ChooseType";

const Routers = () => {
  const {
    activeAllquizes,
    activeHome,
    activeUpcomming,
    setShowData,
    loginID,
    data,
  } = useContext(AppContext);
  const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/AddQuestions") {
      setShowData(true);
    } else {
      setShowData(false);
    }
  }, [location]);
  console.warn(location);


  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/home' />} />
      <Route path='/home' Component={Home} />
      {<Route path='/allquizes' Component={AllQuizes} />}
      {<Route path='/upcoming' Component={Upcoming} />}
      {<Route path='/Type' Component={ChooseType} />}
      {<Route path='/InitiateForm' Component={InitiateForm} />}
      {<Route path='/AddQuestions' Component={AddQuestions} />}
    </Routes>
  );
};

export default Routers;
