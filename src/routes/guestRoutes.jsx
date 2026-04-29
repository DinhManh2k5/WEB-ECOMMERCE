import GuestLayout from "../layouts/GuestLayout";
import HomePage from "../pages/guest/HomePage";

export const guestRoutes = [
  {
    path: "/",
    element: <GuestLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
];
