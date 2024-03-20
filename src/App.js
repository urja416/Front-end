import { RouterProvider, createBrowserRouter } from "react-router-dom"

import RootLayOut from "./ui/RootLayOut";
import HomePage from "./Features/home/HomePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: < RootLayOut />,
      children: [
        {
          index: true, element: <HomePage />
        },
        {
          path: 'about',
          children: [],
          element: <h1>jshdfhgdb </h1>
        }

      ]
    },

  ]);


  return <RouterProvider router={router} />


}

export default App