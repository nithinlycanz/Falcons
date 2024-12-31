import React, { useEffect, useState } from 'react';
import './App.css';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const delayBetweenChars = 50;

function App() {
  const [text, setText] = useState("Falcons Cricket Club");

  useEffect(() => {
    const titleElement = document.querySelector(".title");
    if (titleElement) {
      titleElement.onmouseover = event => {
        let iteration = 0;
        let interval = null;

        clearInterval(interval);

        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return event.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
          }
          iteration += 1 / 3;
        }, delayBetweenChars);

        // Reset text after animation completes
        setTimeout(() => {
          setText("Falcons Cricket Club");
        }, (event.target.dataset.value.length + 1) * delayBetweenChars);
      };

      // Trigger the effect automatically after 1.5 seconds
      setTimeout(() => {
        titleElement.dispatchEvent(new MouseEvent('mouseover'));
      }, 1500);
    }
  }, []);

  return (
    <div className="app-container">
      <h1 className="title" data-value="Falcons Cricket Club">
        {text}
      </h1>
      <p className="subtitle">Coming Soon...</p>
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default App;
