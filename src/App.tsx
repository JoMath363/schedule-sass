import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

const App = () => {
  return (
    <RouterProvider router={route} />
  );
};

export default App;
