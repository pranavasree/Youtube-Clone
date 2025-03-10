import React from "react";
import Navbar from "./components/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Watch from "./components/Watch";
import MainContainer from "./components/MainContainer";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
