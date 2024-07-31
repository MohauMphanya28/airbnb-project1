import React from "react";
import "./Questions.css";
import questions from "../images/questions.jpeg";

const Questions = () => {
  return (
    <div className="questions">
      <img src={questions} alt="woman smiling" />
      <div>
        <p>
          Questions <br />
          about <br /> hosting?
        </p>
        <button>Ask a Superhost</button>
      </div>
    </div>
  );
};

export default Questions;
