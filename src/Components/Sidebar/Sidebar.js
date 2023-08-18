import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoS from "../../assets/images/me.jpg";
import {} from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="upperIcons">
      <img src={LogoS} className="logo"/>
        <FontAwesomeIcon
          icon={faHome}
          color="#4d4d4e"
          className="Icons"
          inverse
        />
        <FontAwesomeIcon
          icon={faHome}
          color="#4d4d4e"
          className="Icons"
          inverse
        />
        <FontAwesomeIcon
          icon={faHome}
          color="#4d4d4e"
          className="Icons"
          inverse
        />
        <FontAwesomeIcon
          icon={faHome}
          color="#4d4d4e"
          className="Icons"
          inverse
        />
      </div>
      <div className="lowerIcons">
        <hr
          style={{
            background: "lime",
            color: "lime",
            borderColor: "lime",
            height: "1px",
            width: "35px",
          }}
        />
        <FontAwesomeIcon
          icon={faHome}
          color="#4d4d4e"
          className="Icons"
          inverse
        />
        <FontAwesomeIcon
          icon={faHome}
          color="#4d4d4e"
          className="Icons"
          inverse
        />
      </div>
    </div>
  );
};

export default Sidebar;
