import React, { useState } from 'react';
import './Generator.css';
import Header from '../Header/Header';

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
    { id: 1, hex: '#00BFB2', name: 'Light Sea Green' },
    { id: 2, hex: '#1A5E63', name: 'Stormy Teal' },
    { id: 3, hex: '#028090', name: 'Teal' },
  ]);

  const removeColor = (index) => {
    if (colors.length === 1) return;
    setColors(colors.filter((_, i) => i !== index));
  };

  const addColorAfter = (index) => {
    const newColor = {
      id: Date.now(),
      hex: getRandomColor(),
      name: 'New Color',
    };

    const updated = [...colors];
    updated.splice(index + 1, 0, newColor);
    setColors(updated);
  };

  return (
    <>
    
      <Header />
      <div className="palette">
        {colors.map((color, index) => (
          <div
            key={color.id}
            className="color"
            style={{ background: color.hex }}
          >
            <div className="actions">
              <button onClick={() => removeColor(index)}>✕</button>
              <button onClick={() => addColorAfter(index)}>＋</button>
            </div>

            <div className="color-info">
              <div className="hex">{color.hex}</div>
              <div className="name">{color.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Generator;
