import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { login, logout } from './store/auth-slice';

function App() {
  const { isLoggedIn } = useSelector(state => state.auth);
  return (
    <div className="App">
      {!isLoggedIn ? (
        <Auth />
      ) : (
        <Layout />
      )}
    </div>
  );
}

export default App;
