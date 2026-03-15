import { useState, createContext, useContext } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import { CartPanel } from "./components/CartPanel";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Catering from "./pages/Catering";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

// Create global cart panel context
const CartPanelContext = createContext<{ isOpen: boolean; setIsOpen: (open: boolean) => void } | null>(null);

export function useCartPanel() {
  const context = useContext(CartPanelContext);
  if (!context) {
    throw new Error('useCartPanel must be used within CartPanelProvider');
  }
  return context;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/about" component={About} />
      <Route path="/catering" component={Catering} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}



function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ErrorBoundary>
      <CartProvider>
        <CartPanelContext.Provider value={{ isOpen: isCartOpen, setIsOpen: setIsCartOpen }}>
          <ThemeProvider defaultTheme="light">
            <TooltipProvider>
              <Toaster />
              <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
              <Router />
            </TooltipProvider>
          </ThemeProvider>
        </CartPanelContext.Provider>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
export { CartPanelContext };
