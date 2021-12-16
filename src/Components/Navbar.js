export default function Navbar() {
  return (
    <header class="mb-auto">
      <h3 class="float-md-start mb-0">
        <img className="m-2" src="logo_unsa.png" width="60px" />
        CarbCalculator
      </h3>
      <nav class="nav nav-masthead float-md-end">
        <a class="nav-link active" aria-current="page" href="/">
          Home
        </a>
        <a class="nav-link" href="/information">
          Conoce más
        </a>
        <a class="nav-link" href="/about">
          Nosotros
        </a>
      </nav>
    </header>
  );
  /*
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-2">
      <div className="navbar-brand">
        <img className="m-2" src="logo_unsa.png" width="60px" />
        <span className="h2" href="#">
          CarbCalculator
        </span>
      </div>
      <button
        className="navbar-toggler m-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ms-auto m-2">
          <li className="nav-item active">
            <a className="nav-link h4" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link h4" href="#">
              Conoce mas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link h4" href="#">
              Nosotros
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );*/
}
