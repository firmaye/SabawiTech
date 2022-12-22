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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);