import { Outlet } from "react-router-dom";
import GuestHeader from "./Header";
import GuestFooter from "./Footer";

export default function GuestLayout() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <GuestHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <GuestFooter />
    </div>
  );
}
