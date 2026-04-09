import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const CartPage = () => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-24 text-center space-y-4">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/40" />
          <h1 className="text-2xl font-bold text-foreground">Your cart is empty</h1>
          <p className="text-muted-foreground">Add items from your favourite stores</p>
          <Link to="/">
            <Button className="mt-4">Browse Stores</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Continue shopping
        </Link>

        <h1 className="text-2xl font-bold text-foreground mb-6">Your Cart</h1>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-4 rounded-xl border bg-card p-4">
              <img src={item.product.image} alt={item.product.name} className="h-20 w-20 rounded-lg object-cover" width={300} height={300} />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">{item.storeName}</p>
                <h3 className="font-medium text-foreground">{item.product.name}</h3>
                <p className="font-semibold text-foreground mt-1">R{(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-7 w-7 p-0" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-sm font-medium w-5 text-center text-foreground">{item.quantity}</span>
                  <Button variant="outline" size="sm" className="h-7 w-7 p-0" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border bg-card p-6 space-y-3">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Subtotal</span>
            <span>R{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Delivery fee</span>
            <span>R25.00</span>
          </div>
          <div className="border-t pt-3 flex justify-between font-semibold text-foreground">
            <span>Total</span>
            <span>R{(totalPrice + 25).toFixed(2)}</span>
          </div>
          <Button
            className="w-full mt-4"
            size="lg"
            onClick={() => {
              clearCart();
              toast.success("Order placed successfully!");
            }}
          >
            Place Order — R{(totalPrice + 25).toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
