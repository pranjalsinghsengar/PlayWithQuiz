import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MenuItems from "../components/MenuItems";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context";
import PrevData from "./PrevData";

const SideNavContainer = styled.div`
  width: 20%;
  /* border: 1px solid black; */
  height: 90%;
`;

const SideNav = () => {
  const {
    loginID,
    ShowData,
    setActiveHome,
    setActiveAllquizes,
    setActiveUpcomming,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    console.log("====================================");
    console.log(currentPath);
    console.log("====================================");
    switch (currentPath) {
      case `/home/${loginID}`:
        setActiveStates(true, false, false);
        break;
      case `/home/${loginID}/allquizes`:
        setActiveStates(false, true, false);
        break;
      case `/home/${loginID}/upcoming`:
        setActiveStates(false, false, true);
        break;
      default:
        // Reset all states if path doesn't match
        setActiveStates(false, false, false);
        break;
    }
  }, [location.pathname, loginID]);

  const setActiveStates = (home, allQuizes, upcoming) => {
    setActiveHome(home);
    setActiveAllquizes(allQuizes);
    setActiveUpcomming(upcoming);
  };

  const navigateTo = (path) => {
    navigate(`/home/${loginID}${path}`);
  };
  return (
    <SideNavContainer className='flex-col flex justify-between'>
      <div>
        <MenuItems
          title='Home'
          active={location.pathname === `/home/${loginID}`}
          onClick={() => navigate("")}
        />
        <MenuItems
          title='All Quizes'
          active={location.pathname === `/home/${loginID}/allquizes`}
          onClick={() => navigate(`/home/${loginID}/allquizes`)}
        />
        <MenuItems
          title='Upcoming'
          active={location.pathname === `/home/${loginID}/upcoming`}
          onClick={() => navigate(`/home/${loginID}/upcoming`)}
        />
      </div>
      {ShowData && <PrevData />}
      {/* <button onClick={()=> }>Sign out</button> */}
    </SideNavContainer>
  );
};

export default SideNav;
