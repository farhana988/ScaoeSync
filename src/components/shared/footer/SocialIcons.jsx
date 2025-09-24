import { socialIcons } from "../../../data/footerData";

const SocialIcons = () => (
  <div className="flex gap-8 text-white">
    {socialIcons.map(({ href, label, icon }, index) => (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="hover:text-white transition text-lg lg:text-2xl"
      >
        {icon}
      </a>
    ))}
  </div>
);

export default SocialIcons;
