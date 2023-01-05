import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import OpportunityPage from "./OpportunityPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import OpportunityDetailPage from "./OpportunityDetailPage";
import BlogContainer from "./components/BlogContainer";
import BlogDetails from "./components/BlogDetails";
import BlogdetailsContainer from "./components/BlogdetailsContainer";
import Signin from "./components/signin";
import Contact from "./Contact";
import Profile from "./Profile"
import AddPortifolio from "./AddPortifolio"
import EditPortifolio from './EditPortifolio'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/opportunity",
    element: <OpportunityPage />,
  },
  {
    path: "/opportunitydetail",
    element: <OpportunityDetailPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/addportifolio",
    element: <AddPortifolio />,
  },
  {
    path: "/editportifolio/:id",
    element: <EditPortifolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <BlogContainer />,
  },
  {
    path: "/blogdetails/:id",
    element: <BlogdetailsContainer />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);