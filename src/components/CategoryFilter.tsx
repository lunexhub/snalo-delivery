import { categories } from "@/data/stores";

interface CategoryFilterProps {
  selected: string;
  onSelect: (id: string) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex flex-col items-center gap-1.5 rounded-xl px-4 sm:px-5 py-3 text-sm font-medium transition-all whitespace-nowrap snap-start
            ${selected === cat.id
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-card text-muted-foreground hover:bg-secondary border"
            }`}
        >
          <span className="text-xl">{cat.icon}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
