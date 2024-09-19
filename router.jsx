import { createBrowserRouter } from "react-router-dom";
import Recipes from "./src/container/Recipes/Recipes";
import Dinner from "./src/container/Dinner/Dinner";
import Cooking from "./src/container/Cooking/Cooking";
import About from "./src/container/About/About";
import LandingPage from "./src/container/App/LandingPage";
import RootLayout from "./src/container/App/RootLayout";

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    { index: true, element: <LandingPage />},
    { path: "recipes", element: <Recipes />},
    { path: "dinner", element: <Dinner />},
    { path: "cooking", element: <Cooking />},
    { path: "about", element: <About />},
  ]
}]);

export default router;