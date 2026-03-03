import React from 'react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-light mt-auto">
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <button
                onClick={() => setCurrentPage('home')}
                className="nav-link px-2 text-muted"
                style={{ border: 'none', background: 'none' }}
              >
                Főoldal
              </button>
            </li>

            <li className="nav-item">
              <button
                onClick={() => setCurrentPage('contact')}
                className="nav-link px-2 text-muted"
                style={{ border: 'none', background: 'none' }}
              >
                Kapcsolatfelvétel
              </button>
            </li>

            <li className="nav-item">
              <button
                onClick={() => setCurrentPage('about')}
                className="nav-link px-2 text-muted"
                style={{ border: 'none', background: 'none' }}
              >
                Rólunk
              </button>
            </li>
          </ul>

          <p className="text-center text-muted">© 2025 Company, Inc</p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;