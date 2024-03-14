import React, { useContext } from "react";
import { AppContext } from "../Context";

const PrevData = () => {
  const { QuizData, setQuizData } = useContext(AppContext);

  return (
    <div className=' flex flex-col text-center gap-2'>
      {Object.keys(QuizData).map((key, i) => {
        return (
          <div
            style={{ borderColor: "#C6C6C6" }}
            className='quiz-item flex gap-2 border px-3  rounded-2xl'
            key={i}
          >
            <div className='font-semibold'>{key}:</div>

            {typeof QuizData[key] === "object" && key === "Ranking" ? (
              <div className='ranking'>
                {Object.entries(QuizData[key]).map(([rank, value], j) => (
                  <div key={j} className='rank mb-2 flex gap-2'>
                    <div className='font-semibold'>{rank}:</div>
                    {value && (
                      <div
                        className='font-semibold  px-4  rounded-xl'
                        style={{ background: getValueColor(rank) }}
                      >
                        {value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : key === "questions" ? (
              <div></div>
            ) : (
              <>
                {QuizData[key] && (
                  <div
                    className=''
                    style={{ borderColor: "#C6C6C6", color: "#A4A4A4" }}
                  >
                    {" "}
                    {QuizData[key]}
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PrevData;

function getValueColor(value) {
  switch (value) {
    case "1":
      return "#FF98DB";
    case "2":
      return "#ADFFD9";
    case "3":
      return "#FFD768";
    case "4-10":
      return "#94D6FF";
    case "10-50":
      return "#D49BFF";
    default:
      return "#000000"; // Default color
  }
}
