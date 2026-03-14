import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  tags: string[];
}

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('mains');
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems: MenuItem[] = [
    // Main Dishes
    {
      id: 'mofongo',
      name: 'Mofongo',
      description: 'Golden plantain dome with garlic broth, served with your choice of protein',
      price: '$14.99',
      category: 'mains',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['plantain', 'vegetarian-option', 'signature'],
    },
    {
      id: 'pollo-guisado',
      name: 'Pollo Guisado',
      description: 'Tender stewed chicken in rich tomato sauce with olives and potatoes',
      price: '$13.99',
      category: 'mains',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/pollo-guisado-dish-VDZPKDcxsnRC5ZLv2DYkMF.webp',
      tags: ['chicken', 'stew', 'comfort-food'],
    },
    {
      id: 'pernil',
      name: 'Pernil',
      description: 'Slow-roasted pork shoulder with crispy skin, served with rice and pigeon peas',
      price: '$18.99',
      category: 'mains',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/pernil-dish-PAekvXiWKhU8CnRQa9b3Ym.webp',
      tags: ['pork', 'roasted', 'premium', 'signature'],
    },
    {
      id: 'carne-guisada',
      name: 'Carne Guisada',
      description: 'Slow-cooked beef stew with peppers, onions, and potatoes in savory sauce',
      price: '$15.99',
      category: 'mains',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/carne-guisada-dish-GbwpPh7PQPh2UCdDaXSYQB.webp',
      tags: ['beef', 'stew', 'comfort-food'],
    },
    {
      id: 'chicharron-pollo',
      name: 'Chicharrón de Pollo',
      description: 'Crispy fried chicken chunks served with rice, beans, and tostones',
      price: '$12.99',
      category: 'mains',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['chicken', 'fried', 'crispy'],
    },
    {
      id: 'ropa-vieja',
      name: 'Ropa Vieja',
      description: 'Shredded beef in tomato sauce with peppers and onions, served with rice',
      price: '$14.99',
      category: 'mains',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/carne-guisada-dish-GbwpPh7PQPh2UCdDaXSYQB.webp',
      tags: ['beef', 'shredded', 'classic'],
    },

    // Sides & Appetizers
    {
      id: 'arroz-gandules',
      name: 'Arroz con Gandules',
      description: 'Yellow rice with pigeon peas and sofrito',
      price: '$4.99',
      category: 'sides',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['rice', 'vegetarian', 'side'],
    },
    {
      id: 'tostones',
      name: 'Tostones',
      description: 'Crispy fried plantain slices with garlic mojo sauce',
      price: '$7.99',
      category: 'sides',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/tostones-dish-XhY2RkCfQ6CYJYQddjeveY.webp',
      tags: ['plantain', 'fried', 'crispy', 'popular'],
    },
    {
      id: 'empanadas',
      name: 'Empanadas (3 pieces)',
      description: 'Crispy pastries filled with seasoned meat or cheese',
      price: '$8.99',
      category: 'sides',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/tostones-dish-XhY2RkCfQ6CYJYQddjeveY.webp',
      tags: ['appetizer', 'fried', 'pastry'],
    },
    {
      id: 'habichuelas',
      name: 'Habichuelas Guisadas',
      description: 'Stewed red beans with sofrito and spices',
      price: '$4.99',
      category: 'sides',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['beans', 'vegetarian', 'side'],
    },
    {
      id: 'yuca-frita',
      name: 'Yuca Frita',
      description: 'Crispy fried cassava root served with garlic sauce',
      price: '$6.99',
      category: 'sides',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/tostones-dish-XhY2RkCfQ6CYJYQddjeveY.webp',
      tags: ['cassava', 'fried', 'crispy'],
    },
    {
      id: 'maduros',
      name: 'Maduros',
      description: 'Sweet fried plantains',
      price: '$5.99',
      category: 'sides',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/tostones-dish-XhY2RkCfQ6CYJYQddjeveY.webp',
      tags: ['plantain', 'sweet', 'fried'],
    },

    // Seafood
    {
      id: 'mofongo-camarones',
      name: 'Mofongo de Camarones',
      description: 'Plantain dome topped with shrimp in garlic sauce',
      price: '$16.99',
      category: 'seafood',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['shrimp', 'plantain', 'seafood', 'premium'],
    },
    {
      id: 'pescado-frito',
      name: 'Pescado Frito',
      description: 'Whole fried fish served with rice, beans, and tostones',
      price: '$17.99',
      category: 'seafood',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/pernil-dish-PAekvXiWKhU8CnRQa9b3Ym.webp',
      tags: ['fish', 'fried', 'seafood', 'whole'],
    },
    {
      id: 'camarones-ajillo',
      name: 'Camarones al Ajillo',
      description: 'Shrimp sautéed in garlic sauce, served with rice and salad',
      price: '$15.99',
      category: 'seafood',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/pollo-guisado-dish-VDZPKDcxsnRC5ZLv2DYkMF.webp',
      tags: ['shrimp', 'garlic', 'seafood'],
    },
    {
      id: 'pulpo-guisado',
      name: 'Pulpo Guisado',
      description: 'Tender octopus stew with peppers and tomato sauce',
      price: '$16.99',
      category: 'seafood',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/carne-guisada-dish-GbwpPh7PQPh2UCdDaXSYQB.webp',
      tags: ['octopus', 'stew', 'seafood'],
    },
    {
      id: 'langostinos',
      name: 'Langostinos',
      description: 'Large shrimp sautéed with garlic, served with rice and vegetables',
      price: '$18.99',
      category: 'seafood',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/pollo-guisado-dish-VDZPKDcxsnRC5ZLv2DYkMF.webp',
      tags: ['shrimp', 'premium', 'seafood'],
    },

    // Beverages
    {
      id: 'batida-platano',
      name: 'Batida de Plátano',
      description: 'Creamy plantain smoothie with milk and cinnamon',
      price: '$5.99',
      category: 'beverages',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['smoothie', 'tropical', 'drink'],
    },
    {
      id: 'batida-guanabana',
      name: 'Batida de Guanabana',
      description: 'Tropical soursop smoothie',
      price: '$5.99',
      category: 'beverages',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['smoothie', 'tropical', 'drink'],
    },
    {
      id: 'jugo-naranja',
      name: 'Jugo de Naranja Fresco',
      description: 'Fresh orange juice',
      price: '$3.99',
      category: 'beverages',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['juice', 'fresh', 'drink'],
    },
    {
      id: 'agua-jamaica',
      name: 'Agua de Jamaica',
      description: 'Traditional hibiscus flower drink',
      price: '$3.99',
      category: 'beverages',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['traditional', 'drink', 'hibiscus'],
    },
    {
      id: 'refresco-coco',
      name: 'Refresco de Coco',
      description: 'Coconut drink',
      price: '$4.99',
      category: 'beverages',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['coconut', 'tropical', 'drink'],
    },
    {
      id: 'horchata',
      name: 'Horchata',
      description: 'Rice milk drink with cinnamon',
      price: '$4.99',
      category: 'beverages',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['rice-milk', 'traditional', 'drink'],
    },

    // Desserts
    {
      id: 'flan',
      name: 'Flan',
      description: 'Silky custard caramel dessert',
      price: '$4.99',
      category: 'desserts',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['dessert', 'custard', 'caramel'],
    },
    {
      id: 'tres-leches',
      name: 'Tres Leches',
      description: 'Sponge cake soaked in three types of milk',
      price: '$5.99',
      category: 'desserts',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['dessert', 'cake', 'classic'],
    },
    {
      id: 'dulce-leche-cheesecake',
      name: 'Dulce de Leche Cheesecake',
      description: 'Rich cheesecake with caramel sauce',
      price: '$5.99',
      category: 'desserts',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['dessert', 'cheesecake', 'caramel'],
    },
    {
      id: 'coconut-cake',
      name: 'Coconut Cake',
      description: 'Traditional Dominican coconut cake',
      price: '$4.99',
      category: 'desserts',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['dessert', 'cake', 'coconut'],
    },
    {
      id: 'majarete',
      name: 'Majarete',
      description: 'Creamy corn pudding',
      price: '$4.99',
      category: 'desserts',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438048923/jHWfQquoZm8oJi86Fq679P/mofongo-dish-Dj5GoEPXZJfuarRg6HCUiu.webp',
      tags: ['dessert', 'pudding', 'traditional'],
    },
  ];

  const menuCategories = [
    { id: 'mains', label: 'Main Dishes' },
    { id: 'sides', label: 'Sides & Appetizers' },
    { id: 'seafood', label: 'Seafood' },
    { id: 'beverages', label: 'Beverages' },
    { id: 'desserts', label: 'Desserts' },
  ];

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search dishes, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground placeholder-muted-foreground"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSearchQuery('');
                }}
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
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className="text-xl font-bold display-text text-foreground flex-1">
                        {item.name}
                      </h3>
                      <p className="text-primary font-bold text-lg whitespace-nowrap">
                        {item.price}
                      </p>
                    </div>

                    <p className="text-foreground/70 text-sm mb-4">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Add to Order
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70 mb-4">
                No dishes found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-primary hover:underline font-medium"
              >
                Clear search
              </button>
            </div>
          )}

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
              <a href="tel:+17187949710">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto">
                  Call (718) 794-9710
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
