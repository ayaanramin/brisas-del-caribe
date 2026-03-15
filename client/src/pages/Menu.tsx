import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price?: number;
}

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [clickedItemId, setClickedItemId] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    // Featured Dominican Dishes
    {
      id: 'mofongo-pollo',
      name: 'Mofongo de Pollo',
      description: 'Mashed fried plantains with seasoned chicken',
      category: 'featured',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      price: 14.99,
    },
    {
      id: 'pernil',
      name: 'Pernil with Rice & Beans',
      description: 'Slow roasted pork served with Dominican rice and beans',
      category: 'featured',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561404?w=400&h=300&fit=crop',
      price: 18.99,
    },
    {
      id: 'arroz-con-pollo',
      name: 'Arroz con Pollo',
      description: 'Seasoned rice cooked with chicken',
      category: 'featured',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      price: 13.99,
    },
    {
      id: 'pollo-al-horno',
      name: 'Pollo al Horno',
      description: 'Dominican style baked chicken',
      category: 'featured',
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
      price: 12.99,
    },
    {
      id: 'sancocho',
      name: 'Sancocho',
      description: 'Traditional Dominican meat and vegetable stew',
      category: 'featured',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      price: 11.99,
    },
    // Appetizers & Sides
    {
      id: 'empanadas',
      name: 'Empanadas',
      description: 'Crispy fried turnovers filled with seasoned meat',
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1571407614812-38bfea4a58da?w=400&h=300&fit=crop',
      price: 6.99,
    },
    {
      id: 'alcapurrias',
      name: 'Alcapurrias',
      description: 'Fried fritters stuffed with savory meat',
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1571407614812-38bfea4a58da?w=400&h=300&fit=crop',
      price: 7.99,
    },
    {
      id: 'tostones',
      name: 'Tostones',
      description: 'Crispy fried green plantains',
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1585238341710-4913dfb3d678?w=400&h=300&fit=crop',
      price: 5.99,
    },
    {
      id: 'maduros',
      name: 'Maduros',
      description: 'Sweet fried ripe plantains',
      category: 'appetizers',
      image: 'https://images.unsplash.com/photo-1585238341710-4913dfb3d678?w=400&h=300&fit=crop',
      price: 5.99,
    },
    // Sandwiches
    {
      id: 'cuban-sandwich',
      name: 'Cuban Sandwich',
      description: 'Roast pork, ham, Swiss cheese, pickles, and mustard on pressed bread',
      category: 'sandwiches',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop',
      price: 9.99,
    },
    {
      id: 'steak-sandwich',
      name: 'Steak Sandwich (Sandwich de Bistec)',
      description: 'Seasoned steak with onions on toasted bread',
      category: 'sandwiches',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop',
      price: 10.99,
    },
    {
      id: 'ham-cheese-sandwich',
      name: 'Ham & Cheese Sandwich',
      description: 'Classic ham and melted cheese on fresh bread',
      category: 'sandwiches',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop',
      price: 7.99,
    },
    // Salads
    {
      id: 'grilled-chicken-salad',
      name: 'Grilled Chicken Salad',
      description: 'Fresh greens with grilled chicken breast',
      category: 'salads',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      price: 10.99,
    },
    {
      id: 'shrimp-salad',
      name: 'Shrimp Salad with Vinaigrette',
      description: 'Fresh greens topped with seasoned shrimp',
      category: 'salads',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      price: 12.99,
    },
  ];

  const menuCategories = [
    { id: 'featured', label: 'Featured Dominican Dishes' },
    { id: 'appetizers', label: 'Appetizers & Sides' },
    { id: 'sandwiches', label: 'Sandwiches' },
    { id: 'salads', label: 'Salads' },
  ];

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddToOrder = (item: MenuItem) => {
    // Trigger animation
    setClickedItemId(item.id);
    setTimeout(() => setClickedItemId(null), 600);
    
    // Show enhanced toast
    toast.success(`✓ Added ${item.name} to order!`, {
      duration: 3000,
      description: `$${item.price?.toFixed(2)} - Ready for checkout`,
      position: 'top-center',
    });
  };

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
      <section className="py-16 flex-grow">
        <div className="container">
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          {filteredItems.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              {/* Category Title */}
              <h2 className="text-3xl font-bold display-text text-foreground mb-8 text-center">
                {menuCategories.find((cat) => cat.id === selectedCategory)?.label}
              </h2>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold display-text text-foreground mb-2">
                        {item.name}
                      </h3>
                      <p className="text-foreground/70 text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary">${item.price?.toFixed(2)}</span>
                      </div>
                      <Button
                        onClick={() => handleAddToOrder(item)}
                        className={`w-full bg-primary hover:bg-primary/90 text-white add-to-order-btn ${
                          clickedItemId === item.id ? 'clicked' : ''
                        }`}
                      >
                        Add to Order
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Full Menu Note */}
              <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 text-center mb-12">
                <p className="text-foreground/80 font-medium">
                  Full menu available in restaurant. Call us for complete details!
                </p>
              </div>
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
              <a href="tel:+17187949710">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold">
                  Call to Order
                </Button>
              </a>
              <a href="/catering">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold">
                  Catering Inquiries
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
