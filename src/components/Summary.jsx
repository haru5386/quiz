import question, { comments } from "../questions";

export default function Summary({ userAnswers }) {
  let userPoint = 0;
  userAnswers.map((item, index) => {
    if (question[index].answers[0] === item) {
      userPoint = userPoint + 1;
    }
  });

  let level = Math.floor(userPoint / 5);
  return (
    <div id="summary">
      Your Score is :{" "}
      <h1>
        {userPoint}/{question.length}
      </h1>
      <h2>{comments[level].title}</h2>
      <p>{comments[level].content}</p>
    </div>
  );
}
