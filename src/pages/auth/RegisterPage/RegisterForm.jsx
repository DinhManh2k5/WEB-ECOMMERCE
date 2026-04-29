import { useState } from "react";

const inputClass = `w-full h-12 px-4 bg-surface-container-high rounded-xl 
                    border-none focus:ring-2 focus:ring-primary/40 
                    placeholder:text-outline outline-none transition-all text-sm`;

export default function RegisterForm() {
  const [form, setForm] = useState({
    ho_ten: "",
    email: "",
    so_dien_thoai: "",
    mat_khau: "",
    xac_nhan: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // gọi API sau
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-on-surface">
          Họ và tên
        </label>
        <input
          name="ho_ten"
          type="text"
          placeholder="Nguyễn Văn A"
          value={form.ho_ten}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-on-surface">Email</label>
        <input
          name="email"
          type="email"
          placeholder="example@indigo.vn"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-on-surface">
          Số điện thoại
        </label>
        <input
          name="so_dien_thoai"
          type="tel"
          placeholder="090 123 4567"
          value={form.so_dien_thoai}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-on-surface">
            Mật khẩu
          </label>
          <input
            name="mat_khau"
            type="password"
            placeholder="••••••••"
            value={form.mat_khau}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-on-surface">
            Xác nhận mật khẩu
          </label>
          <input
            name="xac_nhan"
            type="password"
            placeholder="••••••••"
            value={form.xac_nhan}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex items-start space-x-3 pt-2">
        <input
          name="terms"
          type="checkbox"
          id="terms"
          checked={form.terms}
          onChange={handleChange}
          className="w-5 h-5 mt-0.5 rounded accent-primary"
        />
        <label
          htmlFor="terms"
          className="text-sm text-on-surface-variant leading-tight"
        >
          Tôi đồng ý với{" "}
          <a
            href="#"
            className="text-primary font-medium hover:underline underline-offset-4"
          >
            Điều khoản dịch vụ
          </a>{" "}
          và{" "}
          <a
            href="#"
            className="text-primary font-medium hover:underline underline-offset-4"
          >
            Chính sách bảo mật
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-primary to-primary-container
                         text-on-primary font-bold rounded-full
                         shadow-[0_8px_20px_rgba(70,72,212,0.25)]
                         hover:scale-[1.02] active:scale-[0.98] transition-all
                         flex items-center justify-center gap-2"
      >
        Đăng ký tài khoản →
      </button>
    </form>
  );
}
