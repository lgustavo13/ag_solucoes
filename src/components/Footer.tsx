import Link from "next/link";
import { FacebookIcon, LinkedInIcon, InstagramIcon } from "./icons/SocialIcons";

export const Footer = () => {
  const socialLinks = [
    { label: "Facebook", href: "#", icon: <FacebookIcon /> },
    { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
    { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  ];

  return (
    <footer className="bg-slate-800 text-slate-300 py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((links) => (
            <Link
              key={links.label}
              href={links.href}
              aria-label={links.label}
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              {links.icon}
            </Link>
          ))}
        </div>
        <p>
          &copy; {new Date().getFullYear()} Contábil. Todos os direitos
          reservados.
        </p>
        <p className="text-sm text-slate-400 mt-2">Criado com o ❤️.</p>
      </div>
    </footer>
  );
};
