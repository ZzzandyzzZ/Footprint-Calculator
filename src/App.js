import './App.css';
import Question from "./Components/Question";
import Quiz from "./Components/Quiz";

function App() {
  return (
    <>
      <header>
        <h1> Carbon Footprint UNSA</h1>
      </header>
      <body>
        <Quiz/>
        <div id="surveyResult"></div>
      </body>
      <footer>
        Derechos reservados
      </footer>
    </>
  );
}

export default App;
