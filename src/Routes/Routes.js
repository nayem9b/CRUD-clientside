const { createBrowserRouter } = require("react-router-dom");
const { default: AddProduct } = require("../AddProduct");
const { default: Edit } = require("../Edit");
const { default: Main } = require("../Main");
const { default: Home } = require("./Home");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/edit",
        element: <Edit></Edit>,
      },
    ],
  },
]);

export default routes;
