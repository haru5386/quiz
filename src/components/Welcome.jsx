export default function Welcome({ handleClickStart }) {
  return (
    <div id="welcome">
      <div className="top">
        <div className="board">
          <h1>Let's Start Quiz</h1>
          <p>看你對 k-pop 有多了解</p>
        </div>
      </div>
      <button onClick={handleClickStart}> Go! </button>
    </div>
  );
}
