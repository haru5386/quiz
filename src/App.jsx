import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Welcome from "./components/Welcome";
function App() {
  const [isStart, setIsStart] = useState(false);

  const handleClickStart = () => {
    setIsStart(true);
  };
  return (
    <>
      {isStart ? (
        <>
          <Header></Header>
          <main>
            <Quiz />
          </main>
        </>
      ) : (
        <Welcome handleClickStart={handleClickStart}/>
      )}
    </>
  );
}

export default App;
