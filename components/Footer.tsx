import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Products", href: "#products" },
      { label: "Training", href: "#training" },
    ],
    Resources: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Security", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: MdEmail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-brand-dark border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center">
                <span className="font-bold text-white text-2xl">M</span>
              </div>
              <div>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
                  Moire Tech
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Where Code Meets Defence
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building secure, innovative technology solutions and empowering 
              the next generation of cybersecurity professionals across Africa.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:bg-gradient-to-r hover:from-brand-blue/20 hover:to-brand-violet/20 transition-colors duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon
                    size={20}
                    className="text-gray-400 group-hover:text-brand-blue transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-brand-blue transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-violet group-hover:w-4 mr-2 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © {currentYear} Moire Tech. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Made with ❤️ for the future of African tech
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;