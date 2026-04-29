import {
  GOOGLE_ICON,
  FACEBOOK_ICON,
} from "../../../components/shared/SocialIcons";

const providers = [
  { name: "Google", icon: GOOGLE_ICON },
  { name: "Facebook", icon: FACEBOOK_ICON },
];

export default function RegisterSocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-2">
      {providers.map(({ name, icon }) => (
        <button
          key={name}
          className="h-12 flex items-center justify-center gap-3
                           bg-surface-container-lowest border border-outline-variant/20
                           rounded-xl hover:bg-surface-container-low transition-colors"
        >
          {icon}
          <span className="text-sm font-semibold text-on-surface">{name}</span>
        </button>
      ))}
    </div>
  );
}
