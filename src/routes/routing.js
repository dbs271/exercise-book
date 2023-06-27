import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Main from "../pages/main";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

export default router;
