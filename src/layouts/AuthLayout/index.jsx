import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-grow">
        <Outlet /> {/* LoginPage, RegisterPage... render ở đây */}
      </main>

      <footer className="w-full py-12 bg-surface-container-low">
        {/* Footer của bạn */}
      </footer>
    </div>
  );
}
