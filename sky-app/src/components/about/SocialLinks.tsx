import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/skyguide" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/skyguide" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/skyguide" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/skyguide" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/skyguide" },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          aria-label={`Follow us on ${social.name}`}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
