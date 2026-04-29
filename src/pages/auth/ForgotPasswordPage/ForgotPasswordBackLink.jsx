import { useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // gọi API sau
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-surface-container p-4 rounded-xl text-sm text-on-surface-variant">
        ✅ Đã gửi! Kiểm tra hộp thư{" "}
        <strong className="text-on-surface">{email}</strong>
      </div>
    );
  }

  return (
    <form className="space-y-6 text-left" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold text-on-surface mb-2 ml-1">
          Email khôi phục
        </label>
        <input
          type="email"
          placeholder="example@indigo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full h-12 bg-surface-container-high border-none rounded-xl
                     px-4 text-sm text-on-surface focus:ring-2 focus:ring-primary/40
                     outline-none transition-all"
        />
      </div>

      <button
        type="submit"
        className="w-full h-14 bg-gradient-to-r from-primary to-primary-container
                   text-on-primary font-bold rounded-full
                   shadow-[0_4px_12px_rgba(70,72,212,0.25)]
                   hover:opacity-90 active:scale-[0.98] transition-all
                   flex items-center justify-center gap-2"
      >
        Gửi yêu cầu khôi phục →
      </button>
    </form>
  );
}
