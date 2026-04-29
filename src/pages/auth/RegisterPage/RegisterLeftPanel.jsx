const FEATURES = [
  "Ưu đãi độc quyền cho thành viên",
  "Theo dõi đơn hàng dễ dàng",
  "Lưu danh sách yêu thích",
];

export default function RegisterLeftPanel() {
  return (
    <div
      className="hidden lg:flex flex-col justify-center p-12 
                    bg-surface-container-low relative overflow-hidden"
    >
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
          Bắt đầu hành trình <br />
          <span className="text-primary">Indigo</span> của bạn.
        </h1>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-8 max-w-md">
          Trải nghiệm không gian mua sắm được tuyển chọn kỹ lưỡng, nơi phong
          cách gặp gỡ nghệ thuật sắp đặt.
        </p>
        <ul className="space-y-4">
          {FEATURES.map((item) => (
            <li
              key={item}
              className="flex items-center space-x-3 text-on-surface-variant"
            >
              <span className="text-primary text-lg">✓</span>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Decorative blobs */}
      <div
        className="absolute -bottom-20 -right-20 w-64 h-64 
                      bg-primary/5 rounded-full blur-3xl"
      />
      <div
        className="absolute -top-20 -left-20 w-80 h-80 
                      bg-tertiary/5 rounded-full blur-3xl"
      />
    </div>
  );
}
