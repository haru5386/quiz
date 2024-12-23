import { useRef } from "react";

export default function Answer({ answer, onSelectAnswer, userCurrentAnswer }) {
  const sortingAnswer = useRef();

  if (!sortingAnswer.current) {
    sortingAnswer.current = [...answer];
    sortingAnswer.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {sortingAnswer.current.map((item) => (
        <li className="answer" key={item}>
          <button
            className={
              item === userCurrentAnswer.answer ? userCurrentAnswer.state : ""
            }
            disabled={userCurrentAnswer.answer}
            onClick={() => onSelectAnswer(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
