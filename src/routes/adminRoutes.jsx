import RoleRoute from "./RoleRoute";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/admin/DashboardPage";
import UsersPage from "../pages/admin/UsersPage";

export const adminRoutes = [
  {
    element: <RoleRoute allowedRoles={["admin"]} />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: "/admin", element: <DashboardPage /> },
          { path: "/admin/users", element: <UsersPage /> },
        ],
      },
    ],
  },
];
