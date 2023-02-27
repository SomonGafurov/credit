import React from "react";
import "./App.css";
import AuthorizationComponent from "./components/AuthorizationComponent";
import HomePage from "./components/HomePage";

export default function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? (
    <>
      <HomePage />
    </>
  ) : (
    <AuthorizationComponent />
  );
}
