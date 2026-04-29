import image from "@/assets/images/unnamed.png";

export default function LoginLeftPanel() {
  return (
    <div className="hidden md:block relative bg-surface-container-low">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 
                      to-tertiary/10 mix-blend-multiply"
      />
      <img
        src={image}
        alt="Editorial fashion photography"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
        <h2 className="text-4xl font-extrabold tracking-tighter leading-none mb-4">
          The Indigo Narrative
        </h2>
        <p className="text-body-md opacity-90 max-w-xs leading-relaxed">
          Khám phá bộ sưu tập thời trang được tuyển chọn kỹ lưỡng...
        </p>
      </div>
    </div>
  );
}
