import { Link } from "react-router-dom";

export default function LoginFooterLink() {
  return (
    <div className="mt-12 text-center">
      <p className="text-on-surface-variant text-body-md">
        Chưa có tài khoản?
        <Link
          to="/auth/register"
          className="text-primary font-bold hover:underline underline-offset-4 ml-1"
        >
          Đăng ký ngay
        </Link>
      </p>
    </div>
  );
}
