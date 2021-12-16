import "./App.css";
import Quiz from "./Components/Quiz";

function App() {
  return (
    <>
      <body>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark p-3">
          <div className="navbar-brand">
            <img src="logo_unsa.png" width="60px" />
          </div>
          <div className="navbar-brand">
            <span className="navbar-text text-white text-center h2" href="#">
              Calculadora huella carbono
            </span>
          </div>
          <div className="collapse navbar-collapse my-2 my-lg-0">
            <ul className="navbar-nav navbar-right">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Conoce mas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                WebSiteName
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Quiz />
        <div id="surveyResult"></div>
      </body>
      <footer>Derechos reservados</footer>
    </>
  );
}

export default App;
