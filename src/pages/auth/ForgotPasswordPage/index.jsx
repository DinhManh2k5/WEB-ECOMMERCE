import ForgotPasswordForm from "./ForgotPasswordForm";
import ForgotPasswordBackLink from "./ForgotPasswordBackLink";
import "../auth.css";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      {/* Main */}
      <main className="flex-grow flex items-center justify-center px-6 pt-32 pb-20">
        <div className="w-full max-w-md">
          <div
            className="bg-surface-container-lowest p-10 rounded-xl
                          shadow-[0_12px_40px_rgba(70,72,212,0.08)] text-center"
          >
            {/* Icon */}
            <div
              className="w-16 h-16 bg-surface-container-low rounded-full
                            flex items-center justify-center mx-auto mb-6 text-primary"
            >
              <span className="text-3xl">🔑</span>
            </div>

            {/* Tiêu đề */}
            <h1 className="text-on-surface font-extrabold text-2xl tracking-tight mb-3">
              Quên mật khẩu?
            </h1>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 px-4">
              Nhập email liên kết với tài khoản của bạn. Chúng tôi sẽ gửi hướng
              dẫn khôi phục mật khẩu.
            </p>

            <ForgotPasswordForm />
            <ForgotPasswordBackLink />
          </div>

          {/* Meta link */}
          <p className="text-center mt-8 text-on-surface-variant text-xs opacity-60">
            Gặp sự cố?{" "}
            <a
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Liên hệ hỗ trợ
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
