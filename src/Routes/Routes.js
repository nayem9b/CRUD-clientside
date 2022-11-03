import AllProducts from "../AllProducts";
import EditProduct from "../EditProduct";

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
      {
        path: "/allproducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/edit/:id",
        element: <EditProduct></EditProduct>,
      },
    ],
  },
]);

export default routes;
