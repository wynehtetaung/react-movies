import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import List from "./pages/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <Detail />,
      },
      {
        path: "/movies/:type",
        element: <List />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
