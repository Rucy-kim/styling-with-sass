import React, { useCallback, useState } from "react";
import "./SlideSwitch.scss";

const SlideSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = useCallback(() => {
    setIsChecked((prevChecked) => !prevChecked);
  }, []);

  return (
    <label className="slide-switch">
      <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
      <span className="slider"></span>
    </label>
  );
};

export default SlideSwitch;
