import { Outlet } from "react-router-dom";
import GuestHeader from "./Header";
import GuestFooter from "./Footer";

export default function GuestLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100">
      <GuestHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <GuestFooter />
    </div>
  );
}
