import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import StoreCard from "@/components/StoreCard";
import { stores } from "@/data/stores";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const matchesCategory = selectedCategory === "all" || store.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="container py-6 sm:py-8 space-y-6">
        <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />

        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-foreground mb-4">
            {selectedCategory === "all" ? "All Stores" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
          </h2>

          {filteredStores.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg">No stores found</p>
              <p className="text-sm">Try a different search or category</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredStores.map((store) => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="border-t bg-card py-8 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2026 Snalo Delivery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
