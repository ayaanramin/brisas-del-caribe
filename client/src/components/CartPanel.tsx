import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { X, Trash2, Plus, Minus } from 'lucide-react';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartPanel({ isOpen, onClose }: CartPanelProps) {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (items.length === 0) return;

    const itemsList = items
      .map((item) => `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join('%0A');

    const message = `Hello! I'd like to place an order:%0A%0A${itemsList}%0A%0ATotal: $${totalPrice.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/17187949710?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Only close if clicking directly on the overlay, not on the panel
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay - clickable to close */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity cursor-pointer"
        onClick={handleOverlayClick}
        role="button"
        tabIndex={0}
        onKeyDown={handleEscapeKey}
        aria-label="Close cart"
      />

      {/* Panel */}
      <div 
        className="fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-lg z-50 flex flex-col overflow-hidden"
        onKeyDown={handleEscapeKey}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-900">Your Order</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors flex-shrink-0 touch-manipulation"
            aria-label="Close cart panel"
            type="button"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p className="text-center">Your order is empty</p>
              <p className="text-sm text-gray-400 mt-2">Add items from the menu to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      ${item.price.toFixed(2)} each
                    </p>
                    <p className="text-sm font-semibold text-amber-600 mt-1">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
                        aria-label="Decrease quantity"
                        type="button"
                      >
                        <Minus size={16} className="text-gray-600" />
                      </button>
                      <span className="w-8 text-center font-semibold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
                        aria-label="Increase quantity"
                        type="button"
                      >
                        <Plus size={16} className="text-gray-600" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-red-50 active:bg-red-100 rounded-lg transition-colors text-red-600 touch-manipulation"
                      aria-label="Remove item"
                      type="button"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-3 flex-shrink-0">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-amber-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={clearCart}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors font-medium touch-manipulation"
                type="button"
              >
                Clear Order
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 active:bg-amber-700 transition-colors font-medium touch-manipulation"
                type="button"
              >
                Order via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
