import { useState } from 'react';
import { X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/hero-mofongo-plate-fq9GMVszcRTP55fpL8H4J3.webp',
      alt: 'Mofongo with Chicharrón de Pollo',
      category: 'Dishes',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/featured-pernil-plate-hWk2EoaVqsA8tUiXLd4fUC.webp',
      alt: 'Pernil with Rice and Pigeon Peas',
      category: 'Dishes',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/featured-seafood-plate-epSTQsjVwaeCzFVPcboNKw.webp',
      alt: 'Seafood Mofongo',
      category: 'Dishes',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/featured-tostones-fU5pdcTrm7VCaL6Z34c4Mq.webp',
      alt: 'Crispy Tostones',
      category: 'Dishes',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/hero-restaurant-ambiance-WsNSvMxepmq4ak7wmVnsBk.webp',
      alt: 'Restaurant Interior',
      category: 'Restaurant',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center overflow-hidden bg-gradient-to-r from-primary to-primary/80">
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold display-text text-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            A visual journey through our authentic Dominican cuisine
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white flex-1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg cursor-pointer h-64 md:h-72"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <p className="text-white font-semibold text-center px-4">
                    {image.alt}
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    {image.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold display-text mb-6">
            Experience Our Food
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Visit us in Castle Hill or order online to taste these delicious dishes for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17185551234">
              <button className="px-8 py-3 bg-white hover:bg-gray-100 text-primary font-bold rounded-lg transition-colors w-full sm:w-auto">
                Call Us Today
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
