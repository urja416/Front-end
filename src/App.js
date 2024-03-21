import { RouterProvider, createBrowserRouter } from "react-router-dom"

import RootLayOut from "./ui/RootLayOut";
import HomePage from "./Features/home/HomePage";
import Login from "./Features/auth/Login";
import SignUp from "./Features/auth/SignUp";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: < RootLayOut />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <SignUp /> },
        { path: 'about', element: <h1>jshdfhgdb </h1> }

      ]
    },

  ]);


  return <RouterProvider router={router} />


}

export default App