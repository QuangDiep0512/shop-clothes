import React, { createContext, useEffect, useState } from "react";
import getAuthUser from "../api/getAPI";
import { auth, providerGg, providerFb, database } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, child, get } from "firebase/database";

export const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", auth: false });
  const [userLogin, setUserLogin] = useState("");
  const [userFirebase, setUserFirebase] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "users"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserFirebase(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    document.body.style.overflow = modalVisible ? "auto" : "hidden";
  };

  const loginFormGg = async () => {
    await signInWithPopup(auth, providerGg).then((data) => {
      setUserLogin(data.user.email);
      localStorage.setItem("user", JSON.stringify(data.user.email));
      navigate("/");
      toggleModal();
      window.location.reload();
    });
  };

  const loginFormFb = async () => {
    await signInWithPopup(auth, providerFb).then((data) => {
      // setUserLogin(data.user.email);
      // localStorage.setItem("user", JSON.stringify(data.user.email));
      navigate("/");
      toggleModal();
      window.location.reload();
    });
  };

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    if (storedData) {
      const userData = JSON.parse(storedData);
      setUserLogin(userData.username ? userData.username : userData);
    }
  }, [setUserLogin]);

  useEffect(() => {
    const result = async () => {
      const response = await getAuthUser.getUser();
      setUsers(response);
    };
    result();
  }, []);

  return (
    <LoginContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        users,
        toggleModal,
        modalVisible,
        user,
        setUser,
        userLogin,
        loginFormGg,
        setUserLogin,
        loginFormFb,
        userFirebase,
        email,
        setEmail,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
