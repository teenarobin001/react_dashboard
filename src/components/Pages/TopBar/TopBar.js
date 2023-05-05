import React, { useState } from "react";
import "./Topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../store/actions/AuthActions";

const TopBar = () => {
  const [toggle,setToggle] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleDropdown = () => {
setToggle(!toggle);
  }
  const logoutHandler = (e) =>{
dispatch(logoutAction(navigate))
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">left</div>
        <div className="topright">
          <div className="headerIconContainer">
            <NotificationsIcon />
            <span className="badge headerIconBadge ">4</span>
          </div>
          <div className="headerIconContainer">
            <LanguageIcon />
            <span className="headerIconBadge">2</span>
          </div>
          <div className="headerIconContainer">
            <SettingsIcon />
          </div>
          <div className="headerIconContainer dropdown" onClick={toggleDropdown}>
            <PersonIcon
              className="dropdown-toggle"
               
            />
          </div>
          {toggle&& 
          <div className="dropdownMenu" aria-labelledby="dropdownMenuButton">
            <div className="logout-menu" onClick={logoutHandler}>
              Logout
            </div>
          </div>
}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
