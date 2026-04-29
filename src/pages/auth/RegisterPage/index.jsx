import RegisterLeftPanel from "./RegisterLeftPanel";
import RegisterForm from "./RegisterForm";
import RegisterSocialButtons from "./RegisterSocialButtons";
import "../auth.css";

export default function RegisterPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      {/* Main */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-4">
        <div
          className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2
                        bg-surface-container-lowest rounded-xl overflow-hidden
                        shadow-[0_12px_40px_rgba(70,72,212,0.08)]"
        >
          <RegisterLeftPanel />

          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-on-surface mb-2">
                Tạo tài khoản mới
              </h2>
              <p className="text-on-surface-variant text-sm">
                Điền thông tin bên dưới để bắt đầu.
              </p>
            </div>

            <RegisterForm />

            {/* Divider */}
            <div className="relative py-4 my-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/20" />
              </div>
              <div className="relative flex justify-center">
                <span
                  className="px-4 bg-surface-container-lowest 
                                 text-xs text-outline uppercase tracking-widest"
                >
                  Hoặc đăng ký bằng
                </span>
              </div>
            </div>

            <RegisterSocialButtons />
          </div>
        </div>
      </main>
    </div>
  );
}
