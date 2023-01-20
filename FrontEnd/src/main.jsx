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
import Profile from "./Profile";
import AddPortifolio from "./AddPortifolio";
import BlogContainer from "./components/BlogContainer";
import BlogdetailsContainer from "./components/BlogdetailsContainer";
import EditPortifolio from "./EditPortifolio";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Contact from "./Contact";
import ExtraDetail from "./ExtraDetail";
import Signin from "./Signin";
import Signup from "./Signup";
import NotFoundPageProfile from "./components/NotFoundPageProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/opportunity",
    element: <OpportunityPage />,
  },
  {
    path: "/opportunitydetail/:id",
    element: <OpportunityDetailPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <NotFoundPageProfile />
  },
  {
    path: "/addportifolio",
    element: <AddPortifolio />,
    errorElement: <NotFoundPageProfile />
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
    path: "/blogdetails/:id",
    element: <BlogdetailsContainer />,
  }, {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFoundPageProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);