import React from "react";
import { NavLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <>
      <div>
        {/* hero start */}
        <section className="d-page-banner">
          <div className="container">
            <div className="row">
              <div className="content">
                <h1>Error</h1>
                <ul className="breadcrumb">
                  <li>
                    <NavLink to="/" className="text-decoration-none">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/error" className="text-decoration-none">
                      Error
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* hero end */}

        <section className="not-found s-padding">
          <div className="thumb">
            <img src="assets/images/thumbs/not-found.png" alt="Not Found" />
          </div>
          <div className="content">
            <h2 className="s-title">Oops! Page Not Found.</h2>
            <NavLink to="/" className="btn btn-s1">
              Back to Home Page
            </NavLink>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFound;
