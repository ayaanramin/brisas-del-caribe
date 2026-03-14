import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Mail, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center overflow-hidden bg-gradient-to-r from-primary to-primary/80">
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold display-text text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Visit us in Castle Hill or get in touch with any questions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white flex-1">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold display-text text-foreground mb-8">
                Get in Touch
              </h2>

              {/* Address */}
              <div className="mb-8">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Address
                    </h3>
                    <p className="text-foreground/70">
                      1207 Castle Hill Ave<br />
                      Castle Hill, Bronx, NY 10462
                    </p>
                    <a
                      href="https://maps.google.com/?q=1207+Castle+Hill+Ave+Bronx+NY+10462"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mt-2 inline-block font-medium"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+17187949710"
                      className="text-primary hover:underline font-semibold text-lg"
                    >
                      (718) 794-9710
                    </a>
                    <p className="text-foreground/70 text-sm mt-1">
                      Call for orders, reservations, or catering inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:info@brisasdelcaribe.com"
                      className="text-primary hover:underline"
                    >
                      info@brisasdelcaribe.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Hours
                    </h3>
                    <div className="text-foreground/70 text-sm space-y-1">
                      <p><strong>Monday - Sunday:</strong> 9:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold display-text text-foreground mb-8">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700">
                    We have received your message and will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(718) 555-1234"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your message..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold display-text text-foreground mb-8 text-center">
            Find Us
          </h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Brisas del Caribe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.8697!2d-73.8689!3d40.8445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2s1207%20Castle%20Hill%20Ave%2C%20Bronx%2C%20NY%2010462!5e0!3m2!1sen!2sus!4v1234567890"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold display-text mb-6">
            Ready to Visit?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Come experience authentic Dominican cuisine at Brisas del Caribe. We are located in Castle Hill, Bronx, and open 7 days a week.
          </p>
          <a href="tel:+17187949710">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold">
              Call Us Now
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
