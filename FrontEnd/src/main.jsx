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
import AddPortifolio from "./AddPortifolio"
import EditPortifolio from "./EditPortifolio"
import BlogdetailsContainer from "./components/BlogdetailsContainer";
import Signin from "./Signin";
import Contact from "./Contact";
import ExtraDetail from "./ExtraDetail";
import Signup from "./Signup";
import Profile from "./Profile";

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
    path: "/extradetail",

    element: <ExtraDetail />,
  },
  {
    path: "/blogdetails",
    element: <BlogdetailsContainer />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);