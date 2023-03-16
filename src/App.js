import React, { lazy } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"

const HomePage = lazy(() => import('./pages/HomePage'))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage />
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
