import React from "react";
import { Button } from "antd";
import "./header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="main_div">
      <div className="head">
        <div className="heading">
          <h1>Library Management</h1>
        </div>
        <div className="buttons">
          <Button onClick={()=>navigate("/login")} type="primary">Login</Button>
          <Button onClick={()=>navigate("/Signup")} type="primary" danger>
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Header;
