import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { guestRoutes } from "./routes/guestRoutes";
import { authRoutes } from "./routes/authRoutes";
// import { customerRoutes } from "./routes/customerRoutes";
// import { adminRoutes } from "./routes/adminRoutes";
// import { vendorRoutes } from "./routes/vendorRoutes";
// import { supportRoutes } from "./routes/supportRoutes";
// import { shipperRoutes } from "./routes/shipperRoutes";

const router = createBrowserRouter([...guestRoutes, ...authRoutes]);

export default function App() {
  return <RouterProvider router={router} />;
}
