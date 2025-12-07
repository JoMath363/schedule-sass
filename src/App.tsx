import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/calendar",
    element: <Calendar />
  }
]);

const App = () => {
  return (
    <RouterProvider router={route} />
  );
};

export default App;
