import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../Context";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInAnonymously,
} from "firebase/auth";
import { auth } from "../../database/FirebaseConfig.js";
// import {} from "firebase/auth";

const LoginContainer = styled.div`
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.42);
  backdrop-filter: blur(32.3601188659668px);
  /* background: red; */
`;

const Login = () => {
  const navigate = useNavigate();

  // const credential = GoogleAuthProvider.credentialFromResult(result);
  // const token = credential.accessToken;

  const { QuizData, setQuizData, setisLogin, userData, setuserData } =
    useContext(AppContext);

  // const LoginHandler = () => {
  //   navigate("/main")
  //   setisLogin(true)
  // };

  // const credential = GoogleAuthProvider.credential(
  //   googleUser.getAuthResponse().id_token);

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    // Add the domain restriction
    // provider.setCustomParameters({ hd: "fanible.in" });
    signInWithPopup(auth, provider)
      .then((result) => {
        // Access user data from 'result.user' and save it to cache

        const Data = {
          uid: result.user.uid,
          displayName: result.user.displayName,
          email: result.user.email,
          // Add more user data as needed
        };
        localStorage.setItem("useDataID", JSON.stringify(Data));

        setuserData(Data).then(() => {
          // const userDataString = JSON.stringify(Data.uid);
          // localStorage.setItem("userData", Data.uid);
          navigate("/main");
        });

        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // console.log("credential", credential);
        // console.log("token", token);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error signing in with Google:", error);
      });
  };

  // useEffect(() => {
  //   localStorage.setItem("userData", JSON.stringify(userData));
  // }, [userData]);

  return (
    <div className='w-full h-full overflow-hidden relative flex justify-center items-center'>
      <img className='w-screen' src='/Login.png' alt='' />
      <LoginContainer className='p-20 px-28 absolute'>
        <div
          className=' bg-white p-3 px-16 rounded-md cursor-pointer flex items-center gap-2'
          onClick={googleLogin}
        >
          <img className='w-7' src='/Google.png' alt='' />
          Sign In with google
        </div>
      </LoginContainer>
    </div>
  );
};

export default Login;
