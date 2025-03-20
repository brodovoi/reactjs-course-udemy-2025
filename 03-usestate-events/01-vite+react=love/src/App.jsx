import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleMouseEnter(item) {
    setActiveItem(item);
  }

  function handleMouseLeave() {
    setActiveItem(null);
  }

  return (
    <>
      {isOpen ? (
        <span className="cross" onClick={toggleIsOpen}>
          &times;
        </span>
      ) : (
        <button onClick={toggleIsOpen}>Start</button>
      )}

      {isOpen && (
        <>
          <h1>Vite + React = {count >= 3 ? 'Love' : ''}</h1>
          <div className="logo-container">
            <img
              onMouseEnter={() => handleMouseEnter('vite')}
              onMouseLeave={handleMouseLeave}
              src="/vite.svg"
              className={`logo ${
                count >= 1 || activeItem === 'vite' ? 'active' : ''
              }`}
              alt="Vite logo"
            />
            <p>+</p>
            <img
              onMouseEnter={() => handleMouseEnter('react')}
              onMouseLeave={handleMouseLeave}
              src="/react.svg"
              className={`logo ${
                count >= 2 || activeItem === 'react' ? 'active' : ''
              }`}
              alt="React logo"
            />
            <p>=</p>
            <img
              onMouseEnter={() => handleMouseEnter('love')}
              onMouseLeave={handleMouseLeave}
              src="/love.svg"
              className={`logo ${
                count >= 3 || activeItem === 'love' ? 'active' : ''
              }`}
              alt="Love logo"
            />
          </div>
          <hr />
          <div className="card">
            <p className="count-paragraph">count is {count}</p>
            <div className="increment-buttons">
              <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
              <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
