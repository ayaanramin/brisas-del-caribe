import { Button } from '@/components/ui/button';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onItemAdded?: () => void;
}

export function CartModal({ isOpen, onClose, onItemAdded }: CartModalProps) {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, totalItems } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!isOpen) return null;

  const handleAddConfirmation = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
    onItemAdded?.();
  };

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    
    // Create order summary
    const orderSummary = items
      .map(item => `${item.quantity}x ${item.name} ($${(item.price * item.quantity).toFixed(2)})`)
      .join('\n');
    
    const message = `Hi, I'd like to place an order:\n\n${orderSummary}\n\nTotal: $${totalPrice.toFixed(2)}`;
    const phoneNumber = '7187949710';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">Your Order</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="p-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">Your order is empty</p>
              <Button onClick={onClose} className="w-full">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-3 mb-6">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-background rounded transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-background rounded transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 hover:bg-red-100 text-red-600 rounded transition-colors ml-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="border-t border-border pt-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Items:</span>
                  <span className="font-medium">{totalItems}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Actions */}
              {showConfirmation && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center mb-4 animate-pulse">
                  <p className="text-green-700 font-medium text-sm">✓ Added to order!</p>
                </div>
              )}
              
              {orderPlaced ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-green-700 font-medium">
                    ✓ Order sent to WhatsApp!
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Button
                    onClick={handlePlaceOrder}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Order via WhatsApp
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="outline"
                    className="w-full"
                  >
                    Continue Shopping
                  </Button>
                  <Button
                    onClick={clearCart}
                    variant="ghost"
                    className="w-full text-red-600 hover:bg-red-50"
                  >
                    Clear Cart
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
