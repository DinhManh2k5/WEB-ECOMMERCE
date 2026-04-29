import "../auth.css";
import LoginLeftPanel from "./LoginLeftPanel";
import LoginForm from "./LoginForm";
import SocialLoginButtons from "./SocialLoginButtons";
import LoginFooterLink from "./LoginFooterLink";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-background text-on-surface">
      <div
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 
                      bg-surface-container-lowest rounded-xl overflow-hidden 
                      shadow-[0_12px_40px_rgba(70,72,212,0.08)]"
      >
        <LoginLeftPanel />
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <LoginForm />
          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/30" />
            </div>
            <div className="relative flex justify-center text-label-md">
              <span className="bg-surface-container-lowest px-4 text-on-surface-variant">
                Hoặc đăng nhập với
              </span>
            </div>
          </div>
          <SocialLoginButtons />
          <LoginFooterLink />
        </div>
      </div>
    </main>
  );
}
