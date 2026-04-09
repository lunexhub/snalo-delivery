import { Star, Clock, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Store } from "@/data/stores";

const StoreCard = ({ store }: { store: Store }) => {
  return (
    <Link
      to={`/store/${store.id}`}
      className="group block overflow-hidden rounded-xl border bg-card transition-all hover:shadow-[var(--card-shadow-hover)] animate-fade-in"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={store.image}
          alt={store.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width={600}
          height={400}
        />
        <div className="absolute bottom-2 left-2 flex gap-1.5">
          {store.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-card/90 px-2.5 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-foreground text-lg">{store.name}</h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            {store.rating}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {store.deliveryTime}
          </span>
          <span className="flex items-center gap-1">
            <Truck className="h-3.5 w-3.5" />
            R{store.deliveryFee.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
