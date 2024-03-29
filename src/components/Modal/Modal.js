import React, { useContext, useState } from "react";
import login from "../../img/logo-login.PNG";
import "./Modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import getAuthUser from "../../api/getAPI";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
import { ref, set } from "firebase/database";
import { database } from "../../firebase/config";

export const Modal = () => {
  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    users,
    toggleModal,
    modalVisible,
    loginFormGg,
    loginFormFb,
    userFirebase,
  } = useContext(LoginContext);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (!username || !password) {
      toast.error("username and password cannot be left blank !");
      return;
    } else {
      const usercheck = users.find(
        (user) => user.username === username && user.password === password
      );

      if (usercheck) {
        const response = await getAuthUser.userLogin(username, password);
        if (response && response.token) {
          localStorage.setItem("user", JSON.stringify(usercheck));
          window.location.reload();
          navigate("/");
          toggleModal();
        }
      } else {
        toast.error("username and password are incorrect !");
      }
    }
  };

  const handleRegister = (email, password, username) => {
    if (email !== "" && password !== "" && username !== "") {
      set(ref(database, "users/" + 3), {
        email: email,
        username: username,
        password: password,
      })
        .then(() => {
          localStorage.setItem(
            "user",
            JSON.stringify({
              email: email,
              username: username,
              password: password,
            })
          );
          console.log("Data saved successfully!");
          // Data saved successfully!
        })
        .catch((error) => {
          // The write failed...
        });
    }
  };
  return (
    modalVisible === true && (
      <div className="modal-login">
        <div className="modal-container">
          <FontAwesomeIcon
            icon={faClose}
            className="close-icon"
            onClick={toggleModal}
          />
          <img src={login} alt="" className="img-avatar" />
          {register ? (
            <h3 className="login-heading">REGISTER</h3>
          ) : (
            <h3 className="login-heading">LOG IN</h3>
          )}
          <div className="form-login">
            <form>
              {register && (
                <div className="form-login--group">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="form-login--icon"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="form--input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              )}
              <div className="form-login--group">
                <FontAwesomeIcon icon={faUser} className="form-login--icon" />
                <input
                  type="text"
                  placeholder="Username"
                  className="form--input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-login--group">
                <FontAwesomeIcon icon={faLock} className="form-login--icon" />
                <input
                  type="password"
                  placeholder="Password"
                  className="form--input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
            {register === false && (
              <span className="checkbox">
                <input type="checkbox" />
                Remember me
              </span>
            )}
          </div>
          {register ? (
            <button
              className="btn-register"
              onClick={() => handleRegister(email, password, username)}
            >
              Register
            </button>
          ) : (
            <button className="btn-login" onClick={handleLogin}>
              Login
            </button>
          )}
          <div className="login-other">
            <span className="login-other--title">or login with</span>
            <div className="btn-other">
              <button
                className="btn-login--other"
                onClick={() => loginFormGg()}
              >
                <FcGoogle className="login-other--icon" />
                <p className="login-other--gg">Google</p>
              </button>
              <button
                className="btn-login--other"
                onClick={() => loginFormFb()}
              >
                <RiFacebookFill className="login-other--icon" />
                <p className="login-other--fb">Facebook</p>
              </button>
            </div>
          </div>
          <div className="login-fotter">
            <p className="forgot">Forgot Password?</p>
            {register ? (
              <p className="login" onClick={() => setRegister(false)}>
                Login
              </p>
            ) : (
              <p className="register" onClick={() => setRegister(true)}>
                Register
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};
