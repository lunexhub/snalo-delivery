import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroBanner from "@/assets/hero-banner.jpg";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Delivery food spread"
          className="h-full w-full object-cover will-change-transform"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
      </div>
      <div className="container relative py-12 sm:py-16 md:py-24">
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-primary-foreground leading-tight">
            Fast delivery by<br />
            <span className="text-primary">motorbike 🏍️</span>
          </h1>
          <p className="text-primary-foreground/80 text-base sm:text-lg">
            KFC, McDonald's, Shoprite, Pick n Pay & more — delivered across Bronkhorstspruit, eZithobeni & surrounds.
          </p>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search stores, groceries, food..."
              className="pl-10 h-12 rounded-full bg-card border-none shadow-lg text-foreground"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
