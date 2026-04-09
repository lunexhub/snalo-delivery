import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, Truck, Plus } from "lucide-react";
import { stores } from "@/data/stores";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const StorePage = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const store = stores.find((s) => s.id === id);

  if (!store) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground">Store not found</h1>
          <Link to="/" className="text-primary mt-4 inline-block">Go back</Link>
        </div>
      </div>
    );
  }

  const productCategories = [...new Set(store.products.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Store banner */}
      <div className="relative h-48 md:h-64">
        <img src={store.image} alt={store.name} className="h-full w-full object-cover" width={600} height={400} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="container absolute bottom-0 left-0 right-0 pb-6">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-2">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <h1 className="text-3xl font-bold text-primary-foreground">{store.name}</h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-primary text-primary" />{store.rating}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{store.deliveryTime}</span>
            <span className="flex items-center gap-1"><Truck className="h-4 w-4" />R{store.deliveryFee.toFixed(2)} delivery</span>
          </div>
        </div>
      </div>

      {/* Products */}
      <main className="container py-8 space-y-8">
        {productCategories.map((cat) => (
          <section key={cat}>
            <h2 className="text-xl font-semibold text-foreground mb-4">{cat}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {store.products
                .filter((p) => p.category === cat)
                .map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-4 rounded-xl border bg-card p-4 transition-shadow hover:shadow-[var(--card-shadow)] animate-fade-in"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-24 w-24 rounded-lg object-cover flex-shrink-0"
                      loading="lazy"
                      width={300}
                      height={300}
                    />
                    <div className="flex flex-col justify-between flex-1 min-w-0">
                      <div>
                        <h3 className="font-medium text-foreground">{product.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-semibold text-foreground">R{product.price.toFixed(2)}</span>
                        <Button
                          size="sm"
                          className="h-8 w-8 rounded-full p-0"
                          onClick={() => {
                            addItem(product, store.id, store.name);
                            toast.success(`Added ${product.name} to cart`);
                          }}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default StorePage;
