import question from "../questions";
import { useState, useCallback } from "react";
import Progress from "./Progress";
import Answer from "./Answer";
import Summary from "./Summary";
export default function Quiz() {
  let time = 5000;

  const [userAnswerState, setUserAnswerState] = useState([]);
  const [userCurrentAnswer, setUserCurrentAnswer] = useState({
    answer: "",
    state: null,
  });

  const index = userAnswerState.length;

  if (userCurrentAnswer.state !== null) {
    time = 500;
  }

  const handleSelect = (item) => {
    if (item === null) {
      setUserAnswerState((pre) => [...pre, item]);
      return;
    }

    if (item === question[index].answers[0]) {
      setUserCurrentAnswer({
        answer: item,
        state: "correct",
      });
    } else {
      setUserCurrentAnswer({
        answer: item,
        state: "wrong",
      });
    }
    setTimeout(() => {
      setUserCurrentAnswer({
        answer: "",
        state: null,
      });
      setUserAnswerState((pre) => [...pre, item]);
    }, 1000);
  };

  const progressTimeOut = useCallback(() => {
    handleSelect(null);
  }, [handleSelect]);

  if (question.length === index)
    return <Summary userAnswers={userAnswerState}></Summary>;

  return (
    <div id="quiz">
      <div id="question">
        <Progress
          onTimerOut={userCurrentAnswer.state ? null : progressTimeOut}
          time={time}
          key={`${index}-${time}`}
          userCurrentAnswer={userCurrentAnswer.state}
        />
        <h2>{question[index].text}</h2>
        <Answer
          key={`Ans${index}`}
          answer={question[index].answers}
          onSelectAnswer={handleSelect}
          userCurrentAnswer={userCurrentAnswer}
        />
      </div>
    </div>
  );
}
