import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../Main";
import Login from "../pages/login/Login";

const MainRouter = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Navigate replace to='/login' />} /> */}
      <Route path='/login' Component={Login} />
      <Route path='/main' Component={Main} />
    </Routes>
  );
};

export default MainRouter;
