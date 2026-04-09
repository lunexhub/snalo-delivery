import { ShoppingCart, User, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b bg-card md:bg-card/80 md:backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-xl font-bold font-display text-foreground">
            Snalo
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Delivering in: <strong className="text-foreground">Bronkhorstspruit Region</strong></span>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Sign In</span>
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="outline" size="sm" className="relative gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] bg-primary text-primary-foreground">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
