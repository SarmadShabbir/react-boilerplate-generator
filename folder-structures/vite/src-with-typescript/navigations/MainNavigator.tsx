import { Home } from "../pages";
import { ROUTES } from "../constants";
import { createBrowserRouter } from "react-router-dom";

const MainNavigator = createBrowserRouter([
  {
    path: ROUTES.INDEX,
    Component: Home,
  },
]);

export default MainNavigator;
