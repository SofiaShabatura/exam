import React, { useState, useEffect } from 'react';
import classes from './hoverColorLetters.module.css';

export const HoverColorLetters = ({ text, defaultColor = 'black', colors = [], className = '' }) => {
  const [letters, setLetters] = useState(text.split(''));
  const [hovered, setHovered] = useState({}); // true if hovering or lingering
  const leaveTimers = {}; // timers for leaving

  useEffect(() => {
    setLetters(text.split(''));
  }, [text]);

  const handleMouseEnter = (i) => {
    // cancel any lingering timer if still running
    if (leaveTimers[i]) {
      clearTimeout(leaveTimers[i]);
    }
    setHovered((prev) => ({ ...prev, [i]: true })); // immediately light up
  };

  const handleMouseLeave = (i) => {
    leaveTimers[i] = setTimeout(() => {
      setHovered((prev) => ({ ...prev, [i]: false }));
    }, 800);
  };

  return (
    <h1 className={className}>
      {letters.map((l, i) => {
        const color = hovered[i] ? (colors[i % colors.length] || defaultColor) : defaultColor;
        return (
          <span
            key={i}
            style={{ color, transition: 'color 0.3s' }} // optional smooth fade
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            {l}
          </span>
        );
      })}
    </h1>
  );
};
