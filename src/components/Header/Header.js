import React, { useContext, useEffect, useState } from "react";
import logo from "../../img/logo.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { SidebarContext } from "../../context/SidebarContext";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Search from "./Search";
import { LoginContext } from "../../context/LoginContext";

export const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { setIsClose } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { toggleModal, userLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    if (storedData) {
      setIsLogin(false);
    }
  }, [setIsLogin]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" className="header--img" />
      </Link>
      <Search />
      <div className="header-right">
        {/* {(userLogin || userFirebase) && (
          <div className="avatar--name">
            <FontAwesomeIcon icon={faUser} className="iconUser" />
            <h3 className="username">{userLogin || userFirebase}</h3>
          </div>
        )} */}
        {userLogin && (
          <div className="avatar--name">
            <FontAwesomeIcon icon={faUser} className="iconUser" />
            <h3 className="username">{userLogin}</h3>
          </div>
        )}
        <div className="header-right--cart">
          <FontAwesomeIcon
            icon={faCartArrowDown}
            onClick={() => setIsClose(false)}
          />
          <span>{itemAmount}</span>
        </div>
        <div className="avatar">
          {isLogin ? (
            <button className="login" onClick={toggleModal}>
              Login
            </button>
          ) : (
            <>
              <button className="login" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
