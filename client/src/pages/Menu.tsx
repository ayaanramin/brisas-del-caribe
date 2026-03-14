import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('mains');

  const menuCategories = [
    { id: 'mains', label: 'Main Dishes' },
    { id: 'sides', label: 'Sides & Appetizers' },
    { id: 'seafood', label: 'Seafood' },
    { id: 'beverages', label: 'Beverages' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'specials', label: 'Daily Specials' },
  ];

  const menuItems = {
    mains: [
      {
        name: 'Mofongo',
        description: 'Golden plantain dome with garlic broth, served with your choice of protein',
        price: '$14.99',
      },
      {
        name: 'Pollo Guisado',
        description: 'Tender stewed chicken in rich tomato sauce with olives and potatoes',
        price: '$13.99',
      },
      {
        name: 'Pernil',
        description: 'Slow-roasted pork shoulder with crispy skin, served with rice and pigeon peas',
        price: '$18.99',
      },
      {
        name: 'Carne Guisada',
        description: 'Slow-cooked beef stew with peppers, onions, and potatoes in savory sauce',
        price: '$15.99',
      },
      {
        name: 'Chicharrón de Pollo',
        description: 'Crispy fried chicken chunks served with rice, beans, and tostones',
        price: '$12.99',
      },
      {
        name: 'Ropa Vieja',
        description: 'Shredded beef in tomato sauce with peppers and onions, served with rice',
        price: '$14.99',
      },
    ],
    sides: [
      {
        name: 'Arroz con Gandules',
        description: 'Yellow rice with pigeon peas and sofrito',
        price: '$4.99',
      },
      {
        name: 'Tostones',
        description: 'Crispy fried plantain slices with garlic mojo sauce',
        price: '$7.99',
      },
      {
        name: 'Empanadas (3 pieces)',
        description: 'Crispy pastries filled with seasoned meat or cheese',
        price: '$8.99',
      },
      {
        name: 'Habichuelas Guisadas',
        description: 'Stewed red beans with sofrito and spices',
        price: '$4.99',
      },
      {
        name: 'Yuca Frita',
        description: 'Crispy fried cassava root served with garlic sauce',
        price: '$6.99',
      },
      {
        name: 'Maduros',
        description: 'Sweet fried plantains',
        price: '$5.99',
      },
    ],
    seafood: [
      {
        name: 'Mofongo de Camarones',
        description: 'Plantain dome topped with shrimp in garlic sauce',
        price: '$16.99',
      },
      {
        name: 'Pescado Frito',
        description: 'Whole fried fish served with rice, beans, and tostones',
        price: '$17.99',
      },
      {
        name: 'Camarones al Ajillo',
        description: 'Shrimp sautéed in garlic sauce, served with rice and salad',
        price: '$15.99',
      },
      {
        name: 'Pulpo Guisado',
        description: 'Tender octopus stew with peppers and tomato sauce',
        price: '$16.99',
      },
      {
        name: 'Langostinos',
        description: 'Large shrimp sautéed with garlic, served with rice and vegetables',
        price: '$18.99',
      },
    ],
    beverages: [
      {
        name: 'Batida de Plátano',
        description: 'Creamy plantain smoothie with milk and cinnamon',
        price: '$5.99',
      },
      {
        name: 'Batida de Guanabana',
        description: 'Tropical soursop smoothie',
        price: '$5.99',
      },
      {
        name: 'Jugo de Naranja Fresco',
        description: 'Fresh orange juice',
        price: '$3.99',
      },
      {
        name: 'Agua de Jamaica',
        description: 'Traditional hibiscus flower drink',
        price: '$3.99',
      },
      {
        name: 'Refresco de Coco',
        description: 'Coconut drink',
        price: '$4.99',
      },
      {
        name: 'Horchata',
        description: 'Rice milk drink with cinnamon',
        price: '$4.99',
      },
    ],
    desserts: [
      {
        name: 'Flan',
        description: 'Silky custard caramel dessert',
        price: '$4.99',
      },
      {
        name: 'Tres Leches',
        description: 'Sponge cake soaked in three types of milk',
        price: '$5.99',
      },
      {
        name: 'Dulce de Leche Cheesecake',
        description: 'Rich cheesecake with caramel sauce',
        price: '$5.99',
      },
      {
        name: 'Coconut Cake',
        description: 'Traditional Dominican coconut cake',
        price: '$4.99',
      },
      {
        name: 'Majarete',
        description: 'Creamy corn pudding',
        price: '$4.99',
      },
    ],
    specials: [
      {
        name: 'Monday: Carne Guisada Special',
        description: 'Slow-cooked beef stew with rice, beans, and salad',
        price: '$11.99',
      },
      {
        name: 'Tuesday: Pollo Guisado Special',
        description: 'Tender stewed chicken with rice, beans, and tostones',
        price: '$10.99',
      },
      {
        name: 'Wednesday: Pescado Frito Special',
        description: 'Whole fried fish with rice, beans, and plantains',
        price: '$13.99',
      },
      {
        name: 'Thursday: Pernil Special',
        description: 'Roasted pork with rice, beans, and yuca frita',
        price: '$12.99',
      },
      {
        name: 'Friday: Seafood Combo',
        description: 'Shrimp, fish, and octopus with rice and vegetables',
        price: '$16.99',
      },
      {
        name: 'Weekend: Family Feast',
        description: 'Variety of meats and sides, feeds 4-6 people',
        price: '$59.99',
      },
    ],
  };

  const currentItems = menuItems[selectedCategory as keyof typeof menuItems];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center overflow-hidden bg-gradient-to-r from-primary to-primary/80">
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold display-text text-white mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Authentic Dominican cuisine made fresh daily with family recipes
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 md:py-24 bg-white flex-1">
        <div className="container">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentItems.map((item, idx) => (
              <div
                key={idx}
                className="border-b border-border pb-6 last:border-b-0 hover:bg-muted/20 p-4 rounded-lg transition-colors"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold display-text text-foreground mb-2">
                      {item.name}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-3">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-primary font-bold text-lg whitespace-nowrap">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Ordering CTA */}
          <div className="mt-16 bg-muted/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold display-text text-foreground mb-4">
              Ready to Order?
            </h2>
            <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              Order online for pickup or delivery, or call us to place your order. We also offer catering for special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Order Online
              </Button>
              <a href="tel:+17185551234">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
                  Call (718) 555-1234
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
