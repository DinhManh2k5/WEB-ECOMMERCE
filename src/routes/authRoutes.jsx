import GuestOnlyRoute from "./GuestOnlyRoute";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import OAuthCallbackPage from "../pages/auth/OAuthCallbackPage";

export const authRoutes = [
  {
    element: <GuestOnlyRoute />, // chỉ vào được khi chưa login
    children: [
      {
        element: <AuthLayout />, // layout bọc (footer, wrapper)
        children: [
          { path: "/auth/login", element: <LoginPage /> },
          { path: "/auth/register", element: <RegisterPage /> },
          { path: "/auth/forgot-password", element: <ForgotPasswordPage /> },
          { path: "/auth/oauth/callback", element: <OAuthCallbackPage /> },
        ],
      },
    ],
  },
];
