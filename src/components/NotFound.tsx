import React from "react";
import { NavLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="not-found-wrapper">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="error-title">404</h1>
            <h2 className="error-subtitle">Oops! Page Not Found</h2>
            <p className="error-text">
              The page you're looking for might have been moved, deleted, or may never have existed.
            </p>
            <NavLink to="/" className="btn-home">
              Back to Home
            </NavLink>
          </div>
        </section>

        {/* Floating Animation Illustration */}
        <div className="illustration">
          <img src="assets/images/thumbs/not-found.png" alt="Not Found" />
        </div>

        {/* Inline Styling */}
        <style>{`
          .not-found-wrapper {
            position: relative;
            min-height: 100vh;
            background: linear-gradient(135deg, #101820, #192734);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            text-align: center;
            color: #fff;
            padding: 2rem;
          }

          .hero {
            z-index: 2;
            animation: fadeIn 1s ease-in-out;
          }

          .hero-content {
            max-width: 700px;
            margin: 0 auto;
          }

          .error-title {
            font-size: 9rem;
            font-weight: 800;
            color: #00d4ff;
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.6);
            animation: glow 2s ease-in-out infinite alternate;
          }

          .error-subtitle {
            font-size: 2rem;
            font-weight: 600;
            margin-top: -1rem;
            margin-bottom: 1rem;
            color: #f5f5f5;
          }

          .error-text {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #cfcfcf;
            margin-bottom: 2rem;
          }

          .btn-home {
            display: inline-block;
            background: linear-gradient(90deg, #00d4ff, #0078ff);
            color: #fff;
            padding: 0.9rem 2rem;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            letter-spacing: 0.5px;
            box-shadow: 0 4px 15px rgba(0, 120, 255, 0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .btn-home:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 20px rgba(0, 120, 255, 0.6);
          }

          .illustration {
            position: absolute;
            bottom: 0;
            right: 5%;
            animation: float 4s ease-in-out infinite;
            opacity: 0.8;
          }

          .illustration img {
            width: 600px;
            max-width: 100%;
            height: auto;
          }

          /* Animations */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes glow {
            from { text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff; }
            to { text-shadow: 0 0 25px #0078ff, 0 0 50px #0078ff; }
          }

          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }

          /* Responsive */
          @media (max-width: 768px) {
            .error-title {
              font-size: 6rem;
            }
            .illustration {
              // display: none;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default NotFound;
