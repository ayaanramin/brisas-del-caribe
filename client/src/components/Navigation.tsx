import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Menu', href: '/menu' },
    { label: 'Catering', href: '/catering' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-primary">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-2xl font-bold display-text text-primary">
              Brisas del Caribe
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+17187949710">
            <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary hover:text-white font-bold">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </a>
          <Button size="sm" className="bg-primary hover:bg-primary/80 text-foreground font-bold">
            Order Online
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary/5 border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="block text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <a href="tel:+17187949710">
                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white font-bold">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <Button className="w-full bg-primary hover:bg-primary/80 text-foreground font-bold">
                Order Online
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
