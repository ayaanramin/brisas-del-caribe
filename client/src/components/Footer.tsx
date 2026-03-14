import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-bold display-text mb-4">Brisas del Caribe</h3>
            <p className="text-gray-300 mb-4">
              Authentic Dominican flavor serving Castle Hill and the Bronx with pride and tradition.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              Location
            </h4>
            <p className="text-gray-300">
              2345 Westchester Ave<br />
              Castle Hill, Bronx, NY 10462
            </p>
            <a
              href="https://maps.google.com/?q=2345+Westchester+Ave+Bronx+NY+10462"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline text-sm mt-2 inline-block"
            >
              Get Directions →
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Hours
            </h4>
            <div className="text-gray-300 text-sm space-y-1">
              <p>Mon - Thu: 11am - 10pm</p>
              <p>Fri - Sat: 11am - 11pm</p>
              <p>Sunday: 12pm - 10pm</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              Contact
            </h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p>
                <a href="tel:+17185551234" className="hover:text-accent transition-colors">
                  (718) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@brisasdelcaribe.com" className="hover:text-accent transition-colors">
                  info@brisasdelcaribe.com
                </a>
              </p>
              <p className="text-accent font-semibold mt-3">Catering Available</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2026 Brisas del Caribe. All rights reserved.</p>
          <p>Serving Castle Hill with authentic Dominican cuisine since 2015</p>
        </div>
      </div>
    </footer>
  );
}
