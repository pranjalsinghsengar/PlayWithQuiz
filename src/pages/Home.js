import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CreateBtn = styled.div`
  --WH: 2rem;
  width: var(--WH);
  height: var(--WH);
  background: #c5ffe8;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 00;
  padding: 5rem;
  cursor: pointer;
  margin-top: 4rem;
  margin-left: 4rem;
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */

  position: relative;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <CreateBtn className='shadow-xl' onClick={() => navigate("Type")}>
        +
        <div
          className='text-xs p-5 rounded-xl bg-white absolute w-20 -right-10 shadow-lg text-center'
          style={{}}
        >
          Create New Quiz
        </div>
      </CreateBtn>
    </>
  );
};

export default Home;
