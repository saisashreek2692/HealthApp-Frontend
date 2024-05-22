import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Layout/Login";
import Register from "./Layout/Register";
import Patient from "./Layout/Patient";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/dashboard/patient',
      element: <Patient />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
