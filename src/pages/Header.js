import React, { useContext, useState } from "react";
import { AppContext } from "../Context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [popUp, setPopUp] = useState(false);
  const { data, loginID } = useContext(AppContext);
  const navigate = useNavigate();
  const SignOutHandler = () => {
    localStorage.removeItem("useDataID");
    window.location.replace("/");
    console.warn("Is deleted loginID ", loginID);

    navigate("/");
  };

  // console.warn("popUp", popUp);
  return (
    <div
      className='flex items-center justify-center h-20 '
      style={{ background: "#FFFFFF" }}
    >
      <div className='w-11/12 flex items-center justify-between'>
        <div className='w-14 h-14 rounded-full overflow-hidden'>
          {" "}
          <img className='h-full' src='/logo.jpeg' alt='' />
        </div>
        <div className='h-full flex items-center gap-2'>
          <div className='w-8 h-8 rounded-lg overflow-hidden'>
            {" "}
            <img className='h-full' src='/logo.jpeg' alt='' />
          </div>
          <div className='font-semibold text-2xl'>Fanible Admin Dashboard</div>
          <div
            className='  relative w-auto '
            onMouseEnter={() => setPopUp(true)}
          >
            {" "}
            <div
              className={` text-sm px-3 cursor-pointer py-1 rounded-full border-2  text-center ${
                popUp ? "border-[#ffffff]/0" : " border-[#56f36b]"
              } `}
            >
              {data?.displayName}
            </div>
            {popUp && (
              <div
                className=' absolute mt-2 text-[0.9rem] px-3 cursor-pointer py-1 rounded-full border-2 text-center border-[#f35656] '
                onMouseLeave={() => setPopUp(false)}
                onClick={SignOutHandler}
              >
                Sign out
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
