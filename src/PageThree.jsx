import React from 'react';
import { Link } from 'react-router-dom';

function PageThree() {
  return (
    <div>
      <header>
        <a href="/">
          <img src="sample_image.png" alt="Home" />
        </a>
      </header>
      <nav>Home / Page Three</nav>
      <main>
        <Link to="/page-four">
          <button>Go to Page Four</button>
        </Link>
      </main>
    </div>
  );
}

export default PageThree;