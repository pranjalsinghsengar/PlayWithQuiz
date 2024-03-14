import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MenuItems from "../components/MenuItems";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context";
import PrevData from "./PrevData";

const SideNavContainer = styled.div`
  width: 20%;
  /* border: 1px solid black; */
  height: 90%;
`;

const SideNav = () => {
  const {
    ShowData,
    activeHome,
    activeAllquizes,
    activeUpcomming,
    setActiveAllquizes,
    setActiveHome,
    setActiveUpcomming,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/main") {
      navigate("/home");
    }
    // console.log("asdfdasf");
  }, [location.pathname]);

  useEffect(() => {
    // Get the current pathname from the location object
    const currentPath = location.pathname;
    // Determine which button should be active based on the current pathname
    switch (currentPath) {
      case "/home":
        setActiveHome(true);
        setActiveAllquizes(false);
        setActiveUpcomming(false);
        break;
      case "/allquizes":
        setActiveHome(false);
        setActiveAllquizes(true);
        setActiveUpcomming(false);
        break;
      case "/upcoming":
        setActiveHome(false);
        setActiveAllquizes(false);
        setActiveUpcomming(true);
        break;
      default:
        // Handle other routes if needed
        break;
    }
  }, [location.pathname]);

  const HomeHandler = () => {
    navigate("/home");
  };

  const AllquizesHandler = () => {
    navigate("/allquizes");
  };

  const UpcommingHandler = () => {
    navigate("/upcoming");
  };

  return (
    <SideNavContainer className='flex-col flex justify-between'>
      <div>
        <MenuItems title='Home' active={activeHome} onClick={HomeHandler} />
        <MenuItems
          title='All Quizes'
          active={activeAllquizes}
          onClick={AllquizesHandler}
        />
        <MenuItems
          title='Upcomming'
          active={activeUpcomming}
          onClick={UpcommingHandler}
        />
      </div>
      {ShowData && <PrevData />}

      {/* <button onClick={()=> }>Sign out</button> */}
    </SideNavContainer>
  );
};

export default SideNav;
