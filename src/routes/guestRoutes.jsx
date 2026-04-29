import { Navigate } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import HomePage from "../pages/guest/HomePage";
import ProductListPage from "@/pages/guest/ProductListPage";

export const guestRoutes = [
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { index: true, element: <HomePage /> },

      // 👇 redirect /home → /
      { path: "home", element: <Navigate to="/" replace /> },

      { path: "products", element: <ProductListPage /> },
    ],
  },
];
