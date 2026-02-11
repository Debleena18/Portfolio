import React, { useContext } from "react";
import "./Toggle.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness3Icon from '@mui/icons-material/Brightness3';
// import Moon from "@iconscout/react-unicons/icons/uil-moon";
// import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Brightness3Icon />
      <WbSunnyIcon />
      {/* <Moon />
      <Sun /> */}
      {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                          krna hy pehly */}
      <div
        className="t-button"
        style={darkMode ? { left: "6px" } : { right: "6px" }}
      ></div>
    </div>
  );
};

export default Toggle;
