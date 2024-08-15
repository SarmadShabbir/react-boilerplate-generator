import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import AuthNavigator from "./navigations/AuthNavigator";
import useContextHook from "./hooks/useContextHook";
import MainNavigator from "./navigations/MainNavigator";

function App() {
  const {isAuthenticated} = useContextHook();

  return (
    <div className="App">
      <RouterProvider router={isAuthenticated ? MainNavigator : AuthNavigator} />
    </div>
  );
}

export default App;