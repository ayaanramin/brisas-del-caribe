import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Star, Phone, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const [hoveredDish, setHoveredDish] = useState<number | null>(null);

  const featuredDishes = [
    {
      id: 1,
      name: 'Mofongo',
      description: 'Golden plantain dome with garlic broth and chicharrón de pollo',
      price: '$14.99',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/hero-mofongo-plate-fq9GMVszcRTP55fpL8H4J3.webp',
    },
    {
      id: 2,
      name: 'Pernil',
      description: 'Roasted pork shoulder with crispy skin, rice and pigeon peas',
      price: '$18.99',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/featured-pernil-plate-hWk2EoaVqsA8tUiXLd4fUC.webp',
    },
    {
      id: 3,
      name: 'Seafood Mofongo',
      description: 'Plantain dome topped with shrimp in garlic sauce',
      price: '$16.99',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/featured-seafood-plate-epSTQsjVwaeCzFVPcboNKw.webp',
    },
    {
      id: 4,
      name: 'Tostones',
      description: 'Crispy fried plantain slices with garlic mojo sauce',
      price: '$7.99',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/featured-tostones-fU5pdcTrm7VCaL6Z34c4Mq.webp',
    },
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      text: 'The best mofongo in the Bronx! Authentic flavors that remind me of home. We come here every weekend.',
      rating: 5,
    },
    {
      name: 'James Chen',
      text: 'Incredible food and such a warm, welcoming atmosphere. The staff treats you like family. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Sofia Mendez',
      text: 'We ordered catering for our daughter\'s quinceañera and it was perfect. Fresh, delicious, and beautifully presented.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen md:h-[600px] flex items-center overflow-hidden bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/hero-mofongo-plate-fq9GMVszcRTP55fpL8H4J3.webp"
            alt="Mofongo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>

        <div className="container relative z-10 py-12 md:py-0">
          <div className="max-w-2xl">
            <p className="tagline text-secondary mb-4 text-2xl font-bold">Welcome to</p>
            <h1 className="text-5xl md:text-7xl font-bold display-text text-white mb-4 leading-tight drop-shadow-lg">
              Brisas del Caribe
            </h1>
            <p className="text-xl text-white/95 mb-6 font-medium">
              Authentic Dominican Flavor in the Bronx
            </p>
            <p className="text-lg text-white/90 mb-8 max-w-xl">
              Family-owned restaurant serving Castle Hill with authentic Dominican cuisine, fresh ingredients, and warm hospitality since 2015.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold w-full sm:w-auto">
                  View Menu
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold w-full sm:w-auto">
                Order Online
              </Button>
              <a href="tel:+17187949710" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (718) 794-9710
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="tagline text-primary mb-2">Our Specialties</p>
            <h2 className="text-4xl md:text-5xl font-bold display-text text-foreground mb-4">
              Featured Dishes
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Handcrafted Dominican classics made with fresh ingredients and family recipes passed down through generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredDish(dish.id)}
                onMouseLeave={() => setHoveredDish(null)}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-64 md:h-72">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">
                      Add to Order
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-bold display-text text-foreground mb-2">
                  {dish.name}
                </h3>
                <p className="text-foreground/70 text-sm mb-3">
                  {dish.description}
                </p>
                <p className="text-primary font-bold text-lg">
                  {dish.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <p className="tagline text-primary mb-2">What Our Customers Say</p>
            <h2 className="text-4xl md:text-5xl font-bold display-text text-foreground">
              Love from Castle Hill
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-foreground">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hours */}
            <div className="text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold display-text text-foreground mb-4">Hours</h3>
              <div className="text-foreground/70 space-y-1">
                <p>Monday - Sunday</p>
                <p>9:00 AM - 10:00 PM</p>
              </div>
            </div>

            {/* Location */}
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold display-text text-foreground mb-4">Location</h3>
              <p className="text-foreground/70">
                1207 Castle Hill Ave<br />
                Castle Hill, Bronx, NY 10462
              </p>
              <a
                href="https://maps.google.com/?q=1207+Castle+Hill+Ave+Bronx+NY+10462"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm mt-3 inline-block font-medium"
              >
                Get Directions →
              </a>
            </div>

            {/* Contact */}
            <div className="text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold display-text text-foreground mb-4">Contact</h3>
              <a href="tel:+17187949710" className="text-primary hover:underline font-bold text-lg">
                (718) 794-9710
              </a>
              <p className="text-foreground/70 mt-2">
                <a href="mailto:info@brisasdelcaribe.com" className="hover:text-primary transition-colors">
                  info@brisasdelcaribe.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold display-text mb-6">
            Ready to Experience Authentic Dominican Flavor?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Order online for pickup or delivery, or visit us in Castle Hill. We also offer catering for all occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold">
              Order Now
            </Button>
            <Link href="/catering">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Catering Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
