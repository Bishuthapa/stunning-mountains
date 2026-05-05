import { mountains } from "@/data/mountains";
import { MountainCard } from "@/components/mountains/MountainCard";

export function MountainGrid() {
  return (
    <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {mountains.map((mountain, index) => (
        <MountainCard
          key={mountain.slug}
          mountain={mountain}
          loading={index < 3 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
