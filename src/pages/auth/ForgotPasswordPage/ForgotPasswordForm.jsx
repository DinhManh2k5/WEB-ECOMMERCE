import { Link } from "react-router-dom";

export default function ForgotPasswordBackLink() {
  return (
    <div className="mt-8 pt-6 border-t border-outline-variant/10">
      <Link
        to="/auth/login"
        className="inline-flex items-center gap-2 text-primary font-semibold
                   text-sm hover:opacity-75 transition-opacity group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">
          ←
        </span>
        Quay lại trang Đăng nhập
      </Link>
    </div>
  );
}
