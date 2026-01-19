import React, { useState } from 'react';
import './Generator.css';
import Header from '../Header/Header';

const MAX_COLORS = 8;


const isLightColor = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 160;
};


const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Generator = () => {
  const [colors, setColors] = useState([
    { id: 1, hex: '#00BFB2', name: 'Light Sea Green', locked: false },
    { id: 2, hex: '#1A5E63', name: 'Stormy Teal', locked: false },
    { id: 3, hex: '#028090', name: 'Teal', locked: false },
  ]);

  const removeColor = (index) => {
    if (colors.length === 1) return;
    setColors(colors.filter((_, i) => i !== index));
  };

  const addColorAfter = (index) => {
    if (colors.length >= MAX_COLORS) return;

    const newColor = {
      id: Date.now(),
      hex: getRandomColor(),
      name: 'New Color',
      locked: false,
    };

    const updated = [...colors];
    updated.splice(index + 1, 0, newColor);
    setColors(updated);
  };

  const toggleLock = (index) => {
    const updated = [...colors];
    updated[index].locked = !updated[index].locked;
    setColors(updated);
  };

  return (
    <>
      <Header />

      <div className="instruction-bar">
        <span>Press the spacebar to generate color palettes!</span>
        <button className="save-btn">♡ Save</button>
      </div>

      <div className="palette">
        {colors.map((color, index) => (
          <div
            key={color.id}
            className="color"
            style={{ background: color.hex }}
          >
            <div className="actions">
              <button onClick={() => removeColor(index)}>✕</button>
              <button>◐</button>
              <button>☰</button>
              <button>♡</button>
              <button>↔</button>
              <button>⧉</button>
              <button>🔒</button>
            </div>

            <div
              className={`color-info ${
                isLightColor(color.hex) ? 'dark-text' : 'light-text'
              }`}
            >
              <div className="hex">{color.hex}</div>
              <div className="name">{color.name}</div>
            </div>

            {index < colors.length - 1 && colors.length < MAX_COLORS && (
              <button
                className="add-overlay"
                onClick={() => addColorAfter(index)}
              >
                ＋
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Generator;
