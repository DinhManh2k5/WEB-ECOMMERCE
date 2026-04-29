import { Outlet } from "react-router-dom";
import GuestHeader from "./Header";
import GuestFooter from "./Footer";

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-100">
      <GuestHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <GuestFooter />
    </div>
  );
}
