// components/Footer.jsx
const defaultSocials = [
  {
    name: "Facebook",
    icon: "bx bxl-facebook-circle",
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: "bx bxl-instagram",
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: "bx bxl-linkedin-square",
    href: "https://linkedin.com",
  },
  { name: "Yelp", icon: "bx bxl-yelp", href: "https://yelp.com" },
];

export default function Footer({
  name = "Marci Metzger",
  socials = defaultSocials,
}) {
  return (
    <footer className="w-full bg-black py-12 flex flex-col items-center gap-6">
      {/* SOCIAL ICONS */}
      <div className="flex flex-row items-center gap-5">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="text-white transition-opacity duration-300 hover:opacity-60"
          >
            <i className={`${social.icon} text-2xl`}></i>
          </a>
        ))}
      </div>

      {/* COPYRIGHT */}
      <p className="text-sm uppercase tracking-wide text-[#8a97a8] text-center px-6">
        Copyright © {new Date().getFullYear()} {name} - All Rights Reserved
      </p>

      {/* SMALL DIVIDER LINE */}
      <span className="block w-[50px] h-px bg-white" />
    </footer>
  );
}
