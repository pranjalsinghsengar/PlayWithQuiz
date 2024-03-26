import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../Context";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../database/FirebaseConfig";
import { v4 as uuid } from "uuid";

const InputQuestion = styled.textarea`
  font-size: 3rem;
  border: none;
  outline: none;
  border-bottom: 1px solid #0000004d;
  width: 100%;
`;
const H1_question = styled.div`
  font-size: 3rem;
`;
const InputOption = styled.input`
  font-size: 2rem;
  border: none;
  outline: none;
`;
const Select = styled.select`
  background: #c2fee1;
  font-size: 1.6rem;
  border-radius: 10px;
  width: 30%;
  border: none;
  padding: 10px;
  outline: none;
`;
const AddBTN = styled.div`
  &:after {
    content: "";
    position: absolute;
    width: 50%;
    height: 3px;
    background: #cdf2fe;
    transition: 0.5ms;
    /* background: ${(props) =>
      props.IsQuestionIsFull === 14 ? "#FABEB5" : "#cdf2fe"}; */
    background: ${(props) =>
      props.IsQuestionIsFull === 15
        ? "#D5C6FF"
        : props.IsQuestionIsFull === 14
        ? "#FABEB5"
        : "#cdf2fe"};
  }
`;

const AddQuestions = () => {
  const { QuizData, setQuizData, setShowData, userData, loginID } =
    useContext(AppContext);
  const [IsQuestionIsFull, setIsQuestionIsFull] = useState("");
  const lastQuestionRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "AddQuestions") {
      setShowData(true);
    }
  });
  const addQuestion = () => {
    setQuizData((prevData) => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        { question: "", options: ["", "", "", ""], correctAnswer: null }, // Add correctAnswer property
      ],
    }));
    setIsQuestionIsFull(QuizData.questions.length + 1);
  };

  const handleQuestionChange = (questionIndex, event) => {
    const updatedQuestions = [...QuizData.questions];
    updatedQuestions[questionIndex].question = event.target.value;
    setQuizData({ ...QuizData, questions: updatedQuestions });
    // Apn ne Question === 15 ho jay toh ye code hai
  };

  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const updatedQuestions = [...QuizData.questions];
    updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
    setQuizData({ ...QuizData, questions: updatedQuestions });
  };

  const handleCorrectAnswerChange = (questionIndex, event) => {
    const updatedQuestions = [...QuizData.questions];
    updatedQuestions[questionIndex].correctAnswer = parseInt(
      event.target.value
    ); // Parse the value to an integer
    setQuizData({ ...QuizData, questions: updatedQuestions });
  };

  useEffect(() => {
    if (lastQuestionRef.current) {
      lastQuestionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // console.log(IsQuestionIsFull, "IsQuestionIsFull")
  }, [IsQuestionIsFull]);

  const [loadingSubmit, setloadingSubmit] = useState("Submit");
  const NullHandler = () => {
    console.warn('dont press button repeatedly')
  }
  const submitDataHandler = async () => {
    const documentId = QuizData.QuizType;
    const status = QuizData.status;
    // const userId = userData.uid;

    const collectionRef = collection(db, "users", loginID, documentId);
    const TriviaRef = collection(db, "Trivia", documentId, status);
    // const quizRef = doc(collectionRef, documentId);
    await setloadingSubmit("Submitting...");
    await addDoc(collectionRef, QuizData);
    await addDoc(TriviaRef, QuizData);
    await setQuizData({
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
    await setloadingSubmit("Done");
    await navigate("/");
    await setloadingSubmit("Submit");

    // await setDoc(abc, QuizData);
  };


  return (
    <div className='h-full relative'>
      <div></div>
      <div
        className='overflow-y-auto overflow-x-hidden'
        style={{ maxHeight: "90%" }}
      >
        {QuizData.questions.map((question, questionIndex) => (
          <div
            key={questionIndex}
            ref={
              questionIndex === QuizData.questions.length - 1
                ? lastQuestionRef
                : null
            }
            className='bg-white p-10 mb-5 rounded-lg'
            style={{ width: "90%" }}
          >
            <div className='items-end gap-3'>
              <H1_question>Q.{questionIndex + 1}</H1_question>
              <InputQuestion
                type='text'
                rows={1}
                aria-autocomplete='both'
                placeholder={`Question ${questionIndex + 1}`}
                value={question.question}
                onChange={(e) => handleQuestionChange(questionIndex, e)}
              />
            </div>
            <div className='flex flex-col gap-3 mt-10'>
              {question.options.map((option, optionIndex) => (
                <InputOption
                  key={optionIndex}
                  type='text'
                  placeholder={`Option ${optionIndex + 1}`}
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(questionIndex, optionIndex, e)
                  }
                />
              ))}
              <div className='flex justify-center items-center gap-5'>
                <p className='text-3xl border-b'>Choose Correct Ans</p>
                <Select
                  value={
                    question.correctAnswer !== null
                      ? question.correctAnswer
                      : ""
                  }
                  onChange={(e) => handleCorrectAnswerChange(questionIndex, e)}
                >
                  <option value=''>Select Correct Answer</option>
                  {question.options.map((_, optionIndex) => (
                    <option key={optionIndex} value={optionIndex}>
                      Option {optionIndex + 1}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute w-full bottom-0'>
        <AddBTN
          IsQuestionIsFull={IsQuestionIsFull}
          className='flex justify-center h-5 items-center mt-10 border-brd'
        >
          {IsQuestionIsFull === 15 || IsQuestionIsFull > 15 ? (
            <div
              className='cursor-pointer text-base tracking-widest  px-8 rounded-full py-3 z-10'
              style={{ background: "#D5C6FF" }}
               onClick={loadingSubmit === "Submit" &&  submitDataHandler  }
            >
              {loadingSubmit}
            </div>
          ) : (
            IsQuestionIsFull < 15 && (
              <div
                style={
                  IsQuestionIsFull === 14
                    ? { background: "#FABEB5" }
                    : { background: "#D1F2FC" }
                }
                className='cursor-pointer text-base tracking-widest px-8 rounded-full py-3 z-10'
                // onClick={() => {
                //   addQuestion();
                // }}
                onClick={addQuestion}
              >
                {IsQuestionIsFull === 14
                  ? "Second Last Question"
                  : "Add Question"}
              </div>
            )
          )}
        </AddBTN>
      </div>
    </div>
  );
};

export default AddQuestions;
