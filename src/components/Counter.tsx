import React, { useEffect, useState } from "react";

interface CounterItemProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const CounterItem: React.FC<CounterItemProps> = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 10; // ms per update
    const totalSteps = Math.ceil(duration / incrementTime);
    const increment = end / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span className="number">{count}{suffix}</span>;
};

const Counter: React.FC = () => {
  return (
    <>
      {/* funfact area start */}
      <section className="funfact-area-s2">
        <div className="container">
          <div className="funfact-area-s2-container">
            <div className="funfact-s2">
              <div className="icon">
                <img src="assets/images/feature-icons/projects.svg" alt="" />
              </div>
              <div className="content">
                <h4>
                  <CounterItem end={230} suffix="+" />
                </h4>
                <p>Project Done</p>
              </div>
            </div>

            <div className="funfact-s2">
              <div className="icon">
                <img src="assets/images/feature-icons/clients.svg" alt="" />
              </div>
              <div className="content">
                <h4>
                  <CounterItem end={100} suffix="%" />
                </h4>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="funfact-s2">
              <div className="icon">
                <img src="assets/images/feature-icons/win.svg" alt="" />
              </div>
              <div className="content">
                <h4>
                  <CounterItem end={50} suffix="+" />
                </h4>
                <p>Events Hosted</p>
              </div>
            </div>

            <div className="funfact-s2">
              <div className="icon">
                <img src="assets/images/feature-icons/years.svg" alt="" />
              </div>
              <div className="content">
                <h4>
                  <CounterItem end={5} suffix="+" />
                </h4>
                <p>Glorious Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* funfact area end */}
    </>
  );
};

export default Counter;
