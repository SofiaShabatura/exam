import { useState } from "react";
import "./ColorPalette.css";


export default function ColorPalette() {
  const palettes = [
    ["#876cadff", "#df77b2ff", "#d690b8ff", "#ffc1df", "#ffe3f0"],
    ["#0f2027", "#203a43", "#2c5364", "#7fbcd2", "#cfe9f1"],
    ["#ff512f", "#dd2476", "#ff6a88", "#ffc371", "#fff1c1"],
    ["#d3b46aff", "#a68455ff", "#d39962ff", "#ffc371", "#fff1c1"],
    ["#90bfbbff", "#a5e6bdff", "#e5fbe5ff", "#78ffd6", "#b0fffe"],
    ["#654ea3", "#eaafc8", "#f6e2d3", "#c5dedd", "#667292"],
    ["#e96443", "#904e95", "#f6f8f9", "#c5dedd", "#667292"]
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="card" onClick={() => setIndex((i) => (i + 1) % palettes.length)}>
      {palettes[index].map((color, i) => (
        <div
          key={i}
          className="stripe"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}