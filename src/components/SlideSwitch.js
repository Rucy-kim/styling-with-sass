import React, { useCallback, useState } from "react";
import "./SlideSwitch.scss";

const SlideSwitch = ({ backgroundChecked, backgroundUnchecked }) => {
  const [isChecked, setIsChecked] = useState(false);

  //   const toggleSwitch = useCallback((isChecked) => {
  //     setIsChecked(!isChecked);
  //   }, []);
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

SlideSwitch.defaultProps = {
  backgroundChecked: "blue",
  backgroundUnchecked: "gray",
};

export default SlideSwitch;
