import React, { useContext, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { AppContext } from "../Context";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  opacity: 1;
`;

const TypeDiv = styled.div`
  --w: 20%;
  width: var(--w);
  /* max-height: 80%; */
  position: relative;
  /* background: red; */
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 1px 2px 5px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }

  &:hover + ${Img} {
    opacity: 1;
  }
`;

const Span = styled.div`
  text-transform: uppercase;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const ChooseType = () => {
  const [select, setSelect] = useState("");
  const [WrongSelection, setWrongSelection] = useState("Next");
  // const [ShowNextBtn, setShowNextBtn] = useState(false);

  const { QuizData, setQuizData } = useContext(AppContext);
  // const { WrongSelection, setWrongSelection } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setQuizData({ ...QuizData, QuizType: select });
    // setShowNextBtn(true);
  }, [select]);

  const typeData = [
    {
      type: ["Beginners Friendly", "Fanible Super Trivia", " Mega Contest"],
      images: [
        {
          imageUrl:
            // "https://plus.unsplash.com/premium_photo-1683749810427-9f460939f702?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fH  x8fA%3D%3D",

            "https://images.unsplash.com/photo-1634487666187-bf3bf9002c1d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageUrl:
            // "https://images.unsplash.com/photo-1635492491273-455af7728453?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1634660476928-63015cdbc6d1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1635611320161-e16b1b6f1c2a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  ];
  const handleSubmit = () => {
    navigate("/InitiateForm");
  };

  return (
    <>
      <div className='flex flex-col gap-10 justify-center items-center h-full'>
        <h1 className='text-center text-5xl'>Choose The Quiz Type:</h1>
        <div className=''>
          {/* {select} */}
          {typeData.map((item, index) => {
            return (
              <div
                key={index}
                className=' flex justify-center items-center gap-11 '
              >
                {item.type.map((type, typeIndex) => {
                  return (
                    <TypeDiv
                      key={typeIndex}
                      onClick={() => setSelect(type.replace(/\s+/g, ""))}
                    >
                      <Span
                        style={
                          select == `${type.replace(/\s+/g, "")}`
                            ? { color: "#FFFFFF" }
                            : { color: "#000000DA" }
                        }
                      >
                        {type}
                      </Span>
                      <div className='  h-96'>
                        <Img
                          className='h-full'
                          alt=''
                          src={item.images[typeIndex].imageUrl}
                          style={
                            select == `${type.replace(/\s+/g, "")}`
                              ? { opacity: 1 }
                              : { opacity: 0.3 }
                          }
                        />
                      </div>
                    </TypeDiv>
                  );
                })}
              </div>
            );
          })}
        </div>
        {QuizData.QuizType === "" ? (
          <div
            onClick={() => setWrongSelection("Select Your Type First")}
            style={
              WrongSelection === "Next"
                ? { background: "#FBBEBE" }
                : { background: "#FF9292" }
            }
            className='px-10 py-3 rounded-sm m-10 absolute  bottom-0'
          >
            {WrongSelection}
          </div>
        ) : (
          <div
            onClick={handleSubmit}
            className='cursor-pointer bg-brd px-10 py-3 rounded-sm m-10 absolute  bottom-0'
          >
            {" "}
            Next{" "}
          </div>
        )}
        {/* <input placeholder='xx' type='' onChange={TypeHandler} /> */}
      </div>
    </>
  );
};

export default ChooseType;
