import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
const Input = styled.input`
  border: 1px solid grey;
  padding: 10px;
  border-radius: 10px;
  width: 20rem;
`;

const Input_Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  /* width: 30rem; */
  /* gap: 40px; */
`;

const InitiateForm = () => {
  const { QuizData, setQuizData, setShowData } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = () => {
    navigate("AddQuestions");
    // setShowData(true);
  };

  const handleAddRanking = () => {
    // Check if there are already 5 ranking fields
    if (Object.keys(QuizData.Ranking).length < 5) {
      // Clone the current Ranking object and add a new rank with an empty value
      const newRanking = { ...QuizData.Ranking };
      const newRankNumber = Object.keys(newRanking).length + 1;
      newRanking[`rank${newRankNumber}`] = "";

      // Update the state with the new Ranking object
      setQuizData({
        ...QuizData,
        Ranking: newRanking,
      });
    }
  };
  const handleRankingChange = (e, rankKey) => {
    console.log("rankKey", rankKey);
    setQuizData({
      ...QuizData,
      Ranking: {
        ...QuizData.Ranking,
        [rankKey]: e.target.value,
      },
    });
  };
  const handleDeleteRanking = (rankKey) => {
    if (
      ["rank4", "rank5"].includes(rankKey) &&
      Object.keys(QuizData.Ranking).length > 3
    ) {
      const newRanking = { ...QuizData.Ranking };
      delete newRanking[rankKey];

      setQuizData({
        ...QuizData,
        Ranking: newRanking,
      });
    }
  };

  return (
    // <div className='h-full flex justify-center items-center flex-col gap-4 m-20'>
    <form
      onSubmit={handleSubmit}
      className='h-full flex justify-center items-center flex-col gap-4 m-20'
    >
      <Input_Container>
        <div>
          <h1>Enter Pool Price</h1>
          <Input
            required
            placeholder='Enter Pool Price'
            value={QuizData.poolPrize}
            onChange={(e) =>
              setQuizData({ ...QuizData, poolPrize: e.target.value })
            }
          />
        </div>
        <div>
          <h1>Entry Price</h1>
          <Input
            required
            placeholder='Entry Price'
            value={QuizData.entryPrize}
            onChange={(e) =>
              setQuizData({ ...QuizData, entryPrize: e.target.value })
            }
          />
        </div>
      </Input_Container>
      <Input_Container>
        <div>
          <h1>Date</h1>
          <Input
            required
            placeholder='Entry Price'
            type='date'
            value={QuizData.date}
            onChange={(e) => setQuizData({ ...QuizData, date: e.target.value })}
          />
        </div>
        <div>
          <h1>total Slots</h1>
          <Input
            required
            placeholder='total Slots'
            value={QuizData.totalSlots}
            onChange={(e) =>
              setQuizData({ ...QuizData, totalSlots: e.target.value })
            }
          />
        </div>
        {/* <div>
          <h1>Quiz Category</h1>
          <Input
            placeholder='Quiz Category'
            value={QuizData.quizCategory}
            onChange={(e) =>
              setQuizData({ ...QuizData, quizCategory: e.target.value })
            }
          />
        </div> */}
      </Input_Container>
      {/* <Input_Container>
        
      </Input_Container> */}

      <h1 className='text-3xl font-semibold mt-10'>Let's Discuss Ranking</h1>
      <div className='flex w-9/12 gap-5 justify-center flex-wrap'>
        {/* <Input
            placeholder='Ranking'
            value={QuizData.Ranking.rank1}
            onChange={(e) =>
              setQuizData({
                ...QuizData,
                Ranking: {
                  ...QuizData.Ranking,
                  rank1: e.target.value,
                },
              })
            }
          />
          <Input
            placeholder='Ranking'
            value={QuizData.Ranking.rank2}
            onChange={(e) =>
              setQuizData({
                ...QuizData,
                Ranking: {
                  ...QuizData.Ranking,
                  rank2: e.target.value,
                },
              })
            }
          />
          <Input
            placeholder='Ranking'
            value={QuizData.Ranking.rank3}
            onChange={(e) =>
              setQuizData({
                ...QuizData,
                Ranking: {
                  ...QuizData.Ranking,
                  rank3: e.target.value,
                },
              })
            }
          /> */}

        {/* {Object.keys(QuizData.Ranking).map((rankKey) => (
          <div
            key={rankKey}
            className='flex border rounded-xl overflow-hidden '
          >
            <input
              className=' outline-none'
              style={{ width: "20rem", padding: 10 }}
              placeholder={` Rank ${rankKey}`}
              value={QuizData.Ranking[rankKey]}
              onChange={(e) => handleRankingChange(e, rankKey)}
            />
            {["rank4", "rank5"].includes(rankKey) &&
              Object.keys(QuizData.Ranking).length > 3 && (
                <div
                  className='px-10 py-3 bg-brd'
                  onClick={() => handleDeleteRanking(rankKey)}
                >
                  X
                </div>
              )}
          </div>
        ))} */}
        {Object.keys(QuizData.Ranking).map((rankKey, index) => (
          <div key={rankKey} className='flex border rounded-xl overflow-hidden'>
            {index < 3 ? (
              <input
                className='outline-none'
                style={{ width: "20rem", padding: 10 }}
                placeholder={`Rank ${rankKey}`}
                value={QuizData.Ranking[rankKey]}
                onChange={(e) => handleRankingChange(e, rankKey)}
              />
            ) : (
              <>
                {index < 5 && (
                  <input
                    className='outline-none'
                    // style={{  }}
                    placeholder={`Rank ${rankKey}`}
                    value={QuizData.Ranking[rankKey]}
                    onChange={(e) => handleRankingChange(e, rankKey)}
                    style={{
                      display: QuizData.Ranking[3] ? "block" : "none",
                      width: "20rem",
                      padding: 10,
                    }}
                  />
                )}
                {/* {index && (
                  <input
                    className='outline-none'
                    // style={{  }}
                    placeholder={`Rank ${rankKey}`}
                    value={QuizData.Ranking[rankKey]}
                    onChange={(e) => handleRankingChange(e, rankKey)}
                    style={{
                      display: QuizData.Ranking[3] ? "block" : "none",
                      width: "20rem",
                      padding: 10,
                    }}
                  />
                )} */}
              </>
            )}
          </div>
        ))}

        {Object.keys(QuizData.Ranking).length < 5 && (
          <div className='px-10 py-3 bg-brd' onClick={handleAddRanking}>
            Add
          </div>
        )}
      </div>
      <button
        type='submit'
        // onClick={handleSubmit}
        className='cursor-pointer bg-brd px-10 py-3 rounded-sm m-10'
      >
        {" "}
        Next{" "}
      </button>
    </form>
    // </div>
  );
};

export default InitiateForm;
