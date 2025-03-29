import React from 'react';
import { Link } from 'react-router-dom';

function PageOne() {
  return (
    <div>
      <header>
        <a href="/">
          <img src="sample_image.png" alt="Home" />
        </a>
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
      <nav>
        <Link to="/page-two">
          <button>Page Two</button>
        </Link>
        <Link to="/page-three">
          <button>Page Three</button>
        </Link>
      </nav>
    </div>
  );
}

export default PageOne;