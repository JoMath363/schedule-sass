import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Schedule from "./pages/Schedule";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/calendar",
    element: <Calendar />
  },
  {
    path: "/schedule/:date",
    element: <Schedule />
  }
]);

const App = () => {
  return (
    <RouterProvider router={route} />
  );
};

export default App;
