import React, { useContext } from "react";
import Header from "./pages/Header";
import SideNav from "./pages/SideNav";
import Routers from "./routes/Routers";
import { AppContext } from "./Context";

const Main = () => {
  const { data, loginID } = useContext(AppContext);

  return (
    <>
      <Header />
      <div
        className='flex gap-12'
        style={{
          height: "90%",
          //   background: "linear-gradient(20deg,#ccd6ce, #e9d2c2)",
          background: "#FFFFFF",
        }}
      >
        <SideNav />
        {/* Router */}
        <div className='' style={{ width: "100%", height: "85%" }}>
          {loginID && <Routers />}
        </div>
      </div>
    </>
  );
};

export default Main;
