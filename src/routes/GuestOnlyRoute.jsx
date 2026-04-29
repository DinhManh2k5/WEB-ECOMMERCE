import { Outlet } from "react-router-dom";

// Tạm thời chưa check auth, chỉ cho qua
export default function GuestOnlyRoute() {
  return <Outlet />;
}
