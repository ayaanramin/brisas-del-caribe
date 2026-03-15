import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const [hoveredDish, setHoveredDish] = useState<number | null>(null);

  const popularDishes = [
    {
      id: 1,
      name: 'Mofongo de Pollo',
      description: 'Mashed fried plantains with seasoned chicken',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
    },
    {
      id: 2,
      name: 'Pernil with Rice & Beans',
      description: 'Slow roasted pork served with Dominican rice and beans',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/pernil-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
    },
    {
      id: 3,
      name: 'Arroz con Pollo',
      description: 'Seasoned rice cooked with chicken',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/pollo-guisado-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
    },
    {
      id: 4,
      name: 'Tostones',
      description: 'Crispy fried green plantains',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/tostones-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
    },
    {
      id: 5,
      name: 'Empanadas',
      description: 'Crispy fried turnovers filled with seasoned meat',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/carne-guisada-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
    },
    {
      id: 6,
      name: 'Sancocho',
      description: 'Traditional Dominican meat and vegetable stew',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/featured-seafood-plate-Dj5GoEPXZJfuarRg6HCUiu.webp',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-primary/70">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/hero-restaurant-ambiance-Dj5GoEPXZJfuarRg6HCUiu.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative z-10 text-center">
          <div className="mb-6">
            <p className="text-white/90 text-lg md:text-xl font-medium mb-2">Welcome to</p>
            <h1 className="text-6xl md:text-7xl font-black display-text text-white drop-shadow-lg leading-tight">
              Brisas del Caribe
            </h1>
          </div>
          <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium">
            Authentic Dominican Cuisine in Castle Hill, Bronx
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17187949710">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call (718) 794-9710
              </Button>
            </a>
            <Link href="/menu">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8">
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black display-text text-foreground mb-3">
              Popular Dishes
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Try our most loved Dominican specialties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {popularDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                onMouseEnter={() => setHoveredDish(dish.id)}
                onMouseLeave={() => setHoveredDish(null)}
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      hoveredDish === dish.id ? 'scale-105' : 'scale-100'
                    }`}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{dish.name}</h3>
                  <p className="text-foreground/70 text-sm">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/menu">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-black display-text text-foreground mb-6">
              About Us
            </h2>
          </div>
          <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
            <p>
              Brisas del Caribe is a family-owned Dominican restaurant serving the Castle Hill community since 2015. We bring authentic Caribbean flavors to the Bronx with fresh ingredients, traditional recipes, and warm hospitality.
            </p>
            <p>
              Every dish is prepared with care and passion, honoring the culinary traditions of the Dominican Republic. Whether you're looking for a quick lunch or a family dinner, we're here to serve you authentic Dominican cuisine at its finest.
            </p>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Hours */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Hours</h3>
              </div>
              <div className="space-y-2 text-lg text-foreground/80">
                <p><strong>Monday - Sunday</strong></p>
                <p>9:00 AM - 10:00 PM</p>
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Location</h3>
              </div>
              <div className="space-y-2 text-lg text-foreground/80">
                <p>1207 Castle Hill Ave</p>
                <p>Castle Hill, Bronx, NY 10462</p>
                <a
                  href="https://maps.google.com/?q=1207+Castle+Hill+Ave+Bronx+NY+10462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium inline-block mt-2"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black display-text text-foreground mb-3">
              Gallery
            </h2>
            <p className="text-lg text-foreground/70">
              See what our customers love
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={`https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/featured-${['pernil', 'seafood', 'tostones'][i % 3]}-plate-Dj5GoEPXZJfuarRg6HCUiu.webp`}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-8">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black display-text mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Order online for pickup or delivery, or visit us in Castle Hill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold px-8">
              Order Online
            </Button>
            <a href="tel:+17187949710">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
