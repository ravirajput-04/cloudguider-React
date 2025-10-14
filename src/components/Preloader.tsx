import React, { useEffect } from "react";

const Preloader: React.FC = () => {
  useEffect(() => {
    const handler = () => {
      setTimeout(() => {
        const preloaderContainer = document.getElementById("preloader");
        if (preloaderContainer) {
          preloaderContainer.style.display = "none";
        }
      }, 1000);

      // remove event listener after execution
      document.removeEventListener("DOMContentLoaded", handler);
    };

    document.addEventListener("DOMContentLoaded", handler);

    // cleanup just in case
    return () => {
      document.removeEventListener("DOMContentLoaded", handler);
    };
  }, []);

  return (
    <>
      {/* preloader start */}
      <div className="preloader-container" id="preloader">
        <div className="spinner">
          <div className="rect1" />
          <div className="rect2" />
          <div className="rect3" />
          <div className="rect4" />
          <div className="rect5" />
        </div>
      </div>
      {/* preloader end */}
    </>
  );
};

export default Preloader;
