import React, { useState, useEffect } from 'react';
import classes from './ColorLetters.module.css';

export const ColorLetters = ({
  text,
  defaultColor = 'black',
  colors = [],
  className = '',
  fontSize = '60px',
}) => {
  const [hovered, setHovered] = useState({}); 
  const leaveTimers = {}; 

  const handleMouseEnter = (i) => {
    if (leaveTimers[i]) clearTimeout(leaveTimers[i]);
    setHovered((prev) => ({ ...prev, [i]: true }));
  };

  const handleMouseLeave = (i) => {
    leaveTimers[i] = setTimeout(() => {
      setHovered((prev) => ({ ...prev, [i]: false }));
    }, 800);
  };

  // Розбиваємо текст на слова
  const words = text.split(' ');

  return (
    <h1 className={`${classes.container} ${className}`} style={{ fontSize }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className={classes.word} style={{ marginRight: '0.5em' }}>
          {word.split('').map((letter, i) => {
            const color = hovered[`${wordIndex}-${i}`]
              ? colors[(i + wordIndex) % colors.length] || defaultColor
              : defaultColor;

            return (
              <span
                key={i}
                className={classes.letter}
                style={{ color, fontSize }}
                onMouseEnter={() => handleMouseEnter(`${wordIndex}-${i}`)}
                onMouseLeave={() => handleMouseLeave(`${wordIndex}-${i}`)}
              >
                {letter}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
};
