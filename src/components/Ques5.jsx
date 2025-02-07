import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-200 rounded-md h-4 mt-2 overflow-hidden">
      <div
        className="bg-blue-500 h-full transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

const Ques5 = () => {
  const [bars, setBars] = useState([]);

  const addProgressBar = () => {
    setBars([...bars, <ProgressBar key={bars.id}/>]);
  };


  return (
    <div className="bg-lime-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center ">
      <h1 className="text-4xl px-4 py-2 text-center">
        Question 5 : Progress Bars
      </h1>
     
        <button
          onClick={addProgressBar}
          className="bg-green-500 text-white px-4 py-2 rounded-md my-4 hover:bg-green-600 transition-all"
        >
          Add
        </button>
        <div className="w-1/2 my-10">{bars}</div>

    </div>
  );
};

export default Ques5;
