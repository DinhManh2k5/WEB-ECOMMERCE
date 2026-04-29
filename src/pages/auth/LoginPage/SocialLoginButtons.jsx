import { GOOGLE_ICON, FACEBOOK_ICON } from "@/components/shared/SocialIcons";

const providers = [
  { name: "Google", icon: GOOGLE_ICON, onClick: () => {} },
  { name: "Facebook", icon: FACEBOOK_ICON, onClick: () => {} },
];

export default function SocialLoginButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {providers.map(({ name, icon, onClick }) => (
        <button
          key={name}
          onClick={onClick}
          className="flex items-center justify-center gap-3 h-12 
                     bg-surface-container-lowest border border-outline-variant/20 
                     rounded-xl hover:bg-surface-container-low 
                     transition-colors active:scale-95"
        >
          {icon}
          <span className="text-label-md font-semibold">{name}</span>
        </button>
      ))}
    </div>
  );
}
