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
      {/* <Route path='/' element={<Navigate replace to={`/`} />} /> */}
      {<Route path={`/`} Component={Home} />}

      {<Route path={`/Type`} Component={ChooseType} />}
      {<Route path={`/Type/InitiateForm`} Component={InitiateForm} />}
      {
        <Route
          path={`/Type/InitiateForm/AddQuestions`}
          Component={AddQuestions}
        />
      }

      <Route path={`/allquizes`} Component={AllQuizes} />
      <Route path={`/upcoming`} Component={Upcoming} />
    </Routes>
  );
};

export default Routers;
