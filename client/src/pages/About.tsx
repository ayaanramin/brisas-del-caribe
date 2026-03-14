import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Heart, Users, Leaf } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/hero-restaurant-ambiance-WsNSvMxepmq4ak7wmVnsBk.webp"
            alt="Restaurant Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold display-text text-foreground mb-4">
            Our Story
          </h1>
          <p className="text-xl text-foreground/90 max-w-2xl">
            A family-owned legacy of authentic Dominican cuisine and warm hospitality
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Brisas del Caribe was founded in 2015 by the Rodríguez family, who brought their passion for authentic Dominican cuisine from their home in Santo Domingo to Castle Hill, Bronx. What started as a small neighborhood restaurant has grown into a beloved community gathering place, serving hundreds of families every week.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Our name, "Brisas del Caribe" (Breezes of the Caribbean), reflects our mission: to bring the warmth, flavors, and spirit of the Caribbean to every plate we serve. Every dish is prepared with the same care and love that our grandmother used when cooking for our family back home.
            </p>

            <h2 className="text-3xl font-bold display-text text-foreground mt-12 mb-6">
              Our Commitment
            </h2>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              We believe that great food comes from fresh ingredients and traditional recipes. We source the finest plantains, meats, and vegetables to ensure every meal meets our high standards. Our kitchen staff includes experienced cooks trained in authentic Dominican culinary traditions, and we never compromise on quality.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              More than just a restaurant, Brisas del Caribe is a home away from home. We treat every customer like family, remembering your favorite dishes and making sure you feel welcomed every time you walk through our doors. Whether you're celebrating a special occasion, grabbing a quick lunch, or ordering catering for an event, we're honored to be part of your life.
            </p>

            <h2 className="text-3xl font-bold display-text text-foreground mt-12 mb-6">
              Why Choose Us
            </h2>

            <ul className="space-y-4 text-lg text-foreground/80">
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Authentic Recipes:</strong> Family recipes passed down through generations, prepared exactly as they should be.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Fresh Ingredients:</strong> We use only the freshest produce, meats, and seasonings in every dish.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Warm Hospitality:</strong> Our staff treats you like family, ensuring every visit is memorable.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Community Focused:</strong> We're proud to serve Castle Hill and support local causes.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span><strong>Catering Excellence:</strong> Perfect for birthdays, quinceañeras, corporate events, and celebrations.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold display-text text-foreground text-center mb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold display-text text-foreground mb-4">
                Family
              </h3>
              <p className="text-foreground/70">
                We treat every customer as family. Your satisfaction and happiness are our top priorities, and we take pride in building lasting relationships with our community.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold display-text text-foreground mb-4">
                Quality
              </h3>
              <p className="text-foreground/70">
                We never compromise on quality. Every ingredient is carefully selected, and every dish is prepared with attention to detail and authentic Dominican tradition.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold display-text text-foreground mb-4">
                Community
              </h3>
              <p className="text-foreground/70">
                We're proud members of Castle Hill and the Bronx. We support local events, sponsor youth programs, and give back to the community that supports us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold display-text mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Visit us today and taste authentic Dominican cuisine prepared with love and tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold">
                View Menu
              </Button>
            </Link>
            <a href="tel:+17185551234">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Call Us Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
