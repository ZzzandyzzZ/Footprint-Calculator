import "./App.css";
import Quiz from "./Components/Quiz";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Navbar />
              <Main />
              <Footer />
            </>
          )}
        />
        <Route
          exact
          path="/calculator"
          render={() => (
            <>
              <Navbar />
              <Quiz />
              <Footer />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
