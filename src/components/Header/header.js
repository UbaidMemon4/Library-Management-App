import React from "react";
import { Button } from "antd";
import "./header.css";
import {Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/librarySlice";
const Header = () => {
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch;

  return (
    <div className="main_div">
      <div className="head">
        <div className="heading">
          <h1>Library Management</h1>
        </div>
        <div className="buttons">
          {user ? (
            <Button
              type="primary"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Link to="/Signup">
                <Button type="primary" danger>Signup</Button>
              </Link>
              <Link to="/">
                <Button type="primary">Login</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
