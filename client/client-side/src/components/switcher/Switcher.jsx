import React, { useState } from "react";
import './Switcher.scss'

const Switcher = ({ data, onSwitchChange }) => {
  const [selectedSwitcher, setSelectedSwitcher] = useState(0);
  //двигаем налево и направо в зависимости состояния.
  const [left, setLeft] = useState(0);
  const activeChanger = (switcher, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedSwitcher(index);
    }, 400);
    onSwitchChange();
  };
  return (
    <div className="switching">
      <div className="switchItems">
        {data.map((switcher, index) => (
          <span
            key={index}
            className={`switchItem ${selectedSwitcher === index ? "active" : ""}`}
            onClick={() => activeChanger(switcher, index)}
          >
            {switcher}
          </span>
        ))}
        <span className="movingBg" style={{ left }}/>
      </div>
    </div>
  );
};

export default Switcher;
