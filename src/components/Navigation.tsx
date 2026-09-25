import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { useScrollSection } from '../hooks/useScrollSection';
// import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { icon: Github, href: 'https://github.com/ArindamSharma1', label: 'GitHub', target: '_blank' },
  { icon: Linkedin, href: 'https://linkedin.com/in/arindam-sharma-ab4712251', label: 'LinkedIn', target: '_blank' },
];

export const Navigation = () => {
  const activeSection = useScrollSection();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 
      bg-primary/90 
      backdrop-blur-md 
      border-b border-primary-surface 
      transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-max-width section-padding py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-txt-primary"
            whileHover={{ scale: 1.05 }}
          >
            As.
          </motion.div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={item.id} className="relative group">
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link relative z-10 ${activeSection === item.id
                    ? 'text-accent'
                    : 'text-txt-secondary hover:text-accent'
                    }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  {/* Hover Underline (only when not active) */}
                  {activeSection !== item.id && (
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent/50 transition-all duration-300 group-hover:w-full" />
                  )}
                </motion.button>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Social + Theme Toggle */}
          <div className="flex items-center gap-4">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-txt-secondary hover:text-accent transition-colors"
                  whileHover={{ scale: 1.2, rotate: 12 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  target={social.target}
                  rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}

            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
