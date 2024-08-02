import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Home, Cart, Error ,Search } from "./pages";
import { MainLayout } from "./layouts";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
