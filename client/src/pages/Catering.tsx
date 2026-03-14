import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Utensils, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Catering() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    guestCount: '',
    eventType: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Catering inquiry:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventDate: '',
        guestCount: '',
        eventType: '',
        details: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const cateringOptions = [
    {
      icon: Users,
      title: 'Birthdays & Celebrations',
      description: 'Make your special day memorable with authentic Dominican cuisine. Perfect for intimate gatherings or large parties.',
    },
    {
      icon: Calendar,
      title: 'Corporate Events',
      description: 'Impress your clients and team with delicious food and professional service. We handle office lunches and company celebrations.',
    },
    {
      icon: Utensils,
      title: 'Family Gatherings',
      description: 'Quinceañeras, family reunions, and holiday celebrations. Let us bring the warmth of Dominican hospitality to your event.',
    },
    {
      icon: CheckCircle,
      title: 'Custom Menus',
      description: 'Work with our team to create a custom menu tailored to your preferences, dietary needs, and budget.',
    },
  ];

  const eventTypes = [
    { value: 'birthday', label: 'Birthday Party' },
    { value: 'quinceañera', label: 'Quinceañera' },
    { value: 'wedding', label: 'Wedding' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'family', label: 'Family Gathering' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center overflow-hidden bg-gradient-to-r from-primary to-primary/80">
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold display-text text-white mb-4">
            Catering
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Bring authentic Dominican flavor to your special event
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white flex-1">
        <div className="container">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold display-text text-foreground mb-6">
              Make Your Event Unforgettable
            </h2>
            <p className="text-lg text-foreground/70 mb-4">
              At Brisas del Caribe, we believe every celebration deserves authentic, delicious food prepared with care. Whether you're planning a birthday, quinceañera, corporate event, or family gathering, we're here to make your event special.
            </p>
            <p className="text-lg text-foreground/70">
              Our catering service includes full menu customization, professional delivery and setup, and attentive service to ensure your guests have an unforgettable experience.
            </p>
          </div>

          {/* Catering Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {cateringOptions.map((option, idx) => {
              const Icon = option.icon;
              return (
                <div key={idx} className="bg-muted/30 rounded-lg p-8 hover:shadow-md transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold display-text text-foreground mb-3">
                    {option.title}
                  </h3>
                  <p className="text-foreground/70">
                    {option.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Why Choose Us */}
          <div className="bg-primary/5 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold display-text text-foreground mb-6 text-center">
              Why Choose Brisas del Caribe for Catering?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Authentic Dominican recipes prepared by experienced chefs',
                'Fresh ingredients sourced daily for quality and taste',
                'Flexible menu options to suit any budget and preference',
                'Professional service and attention to detail',
                'Delivery and setup included for your convenience',
                'Competitive pricing for groups of all sizes',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold display-text text-foreground mb-8 text-center">
              Request a Catering Quote
            </h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-green-700">
                  We've received your catering inquiry. Our team will contact you within 24 hours to discuss your event and provide a quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-muted/20 rounded-lg p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(718) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="50"
                      min="1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select an event type</option>
                    {eventTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Event Details & Special Requests
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your event, dietary restrictions, menu preferences, etc."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Request Catering Quote
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold display-text mb-6">
            Have Questions?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Call us directly to discuss your catering needs and get a personalized quote.
          </p>
          <a href="tel:+17185551234">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold">
              Call (718) 555-1234
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
