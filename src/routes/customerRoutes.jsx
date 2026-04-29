import ProtectedRoute from "./ProtectedRoute";
import CustomerLayout from "../layouts/CustomerLayout";
import DashboardPage from "../pages/customer/DashboardPage";
import OrdersPage from "../pages/customer/OrdersPage";
import CheckoutPage from "../pages/customer/CheckoutPage";

export const customerRoutes = [
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <CustomerLayout />,
        children: [
          { path: "/account", element: <DashboardPage /> },
          { path: "/account/orders", element: <OrdersPage /> },
          { path: "/checkout", element: <CheckoutPage /> },
        ],
      },
    ],
  },
];
