import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // gọi API sau
  };

  return (
    <>
      {/* Tiêu đề */}
      <div className="mb-10">
        <h1 className="text-headline-md font-bold text-on-surface tracking-tight mb-2">
          Chào mừng trở lại
        </h1>
        <p className="text-on-surface-variant text-body-md">
          Vui lòng đăng nhập để tiếp tục trải nghiệm cùng chúng tôi.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block text-label-md font-semibold text-on-surface-variant">
            Email
          </label>
          <input
            type="email"
            placeholder="ten@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 bg-surface-container-high rounded-xl 
                       border-none focus:ring-2 focus:ring-primary/40 
                       placeholder:text-outline outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-label-md font-semibold text-on-surface-variant">
              Mật khẩu
            </label>
            <a
              href="/auth/forgot-password"
              className="text-label-md font-medium text-primary hover:opacity-75"
            >
              Quên mật khẩu?
            </a>
          </div>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 bg-surface-container-high rounded-xl 
                       border-none focus:ring-2 focus:ring-primary/40 
                       placeholder:text-outline outline-none transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-primary to-primary-container 
                     text-on-primary font-bold rounded-full 
                     shadow-[0_4px_12px_rgba(70,72,212,0.25)] 
                     hover:opacity-90 active:scale-95 transition-all"
        >
          Đăng nhập
        </button>
      </form>
    </>
  );
}
