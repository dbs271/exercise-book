import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Main from "../pages/main";
import Todo from "../pages/todo";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/todo/3",
        element: <Todo />,
      },
    ],
  },
]);

export default router;
