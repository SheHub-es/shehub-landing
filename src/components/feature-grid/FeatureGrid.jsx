import { useFeatures } from "@/hooks/useFeatures";
import { GridItem } from "@/components/grid-item/GridItem";

export function FeatureGrid() {
  const features = useFeatures();

  return (
    <section className="mt-8 md:mt-14 mb-0 md:mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap:4 md:gap-6 max-w-[24.063rem] sm:max-w-none mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start p-4 rounded-[0.938rem]"
          >
            <GridItem feature={feature} />
          </div>
        ))}
      </div>
    </section>
  );
}