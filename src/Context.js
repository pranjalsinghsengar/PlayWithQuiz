import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

const Context = ({ children }) => {
  const [addQuiz, setAddQuiz] = useState([]);
  const [activeHome, setActiveHome] = useState(true);
  const [activeAllquizes, setActiveAllquizes] = useState(false);
  const [activeUpcomming, setActiveUpcomming] = useState(false);
  const [ShowData, setShowData] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const [userData, setuserData] = useState(null);

  const [QuizData, setQuizData] = useState({
    QuizType: "",
    time: "",
    status: "Upcoming",
    date: "",
    poolPrize: "",
    entryPrize: "",
    // quizCategory: "",
    totalSlots: "",
    Ranking: { 1: "", 2: "", 3: "", "4-10": "", "10-50": "" },
    questions: [],
  });

  useEffect(() => {
    var currentDate = new Date();
    var quizDate = new Date(QuizData.date);
    if (quizDate > currentDate) {
      setQuizData((prevData) => ({
        ...prevData,
        time: currentDate.toString(),
        status: "Upcoming",
      }));
    } else {
      setQuizData((prevData) => ({
        ...prevData,
        time: currentDate.toString(),
        status: "Completed",
      }));
    }
    console.log("QuizData ", QuizData);
  }, [QuizData.date]);

  console.log("userData ", userData);

  const data = JSON.parse(localStorage.getItem("useDataID"));
  let loginID = data ? data.uid : null;
  console.log("loginID ", loginID);
  
 

  return (
    <AppContext.Provider
      value={{
        QuizData,
        setQuizData,
        addQuiz,
        setAddQuiz,
        activeAllquizes,
        setActiveAllquizes,
        activeHome,
        setActiveHome,
        activeUpcomming,
        setActiveUpcomming,
        ShowData,
        setShowData,
        setisLogin,
        isLogin,
        userData,
        setuserData,
        loginID,
        data,
      }}
    >
      {" "}
      {children}
    </AppContext.Provider>
  );
};

export default Context;
