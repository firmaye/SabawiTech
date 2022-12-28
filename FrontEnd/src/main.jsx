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
    path: "/blog",

    element: <BlogContainer />,
  },
  {
    path: "/blogdetails/:id",
    element: <BlogdetailsContainer />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>

    <React.StrictMode>

      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);