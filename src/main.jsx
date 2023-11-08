import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
