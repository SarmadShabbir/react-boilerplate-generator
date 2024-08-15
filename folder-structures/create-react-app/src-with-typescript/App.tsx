import "./App.css";
import contextHook from "./hooks/contextHook";
import { RouterProvider } from "react-router-dom";
import AuthNavigator from "./navigations/AuthNavigator";
import MainNavigator from "./navigations/MainNavigator";

function App() {
  const { isAuthenticated } = contextHook();

  return (
    <div className="App">
      <RouterProvider
        router={!isAuthenticated ? AuthNavigator : MainNavigator}
      />
    </div>
  );
}

export default App;
