import quizLogo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={quizLogo} alt="header" />
      <h1>K-pop Question!!</h1>
    </header>
  );
}
