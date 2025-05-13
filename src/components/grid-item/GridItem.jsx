export function GridItem({ feature }) {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="mb-4 flex justify-center items-center">
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-6 h-6 md:w-10 sm:h-10"
        />
      </div>

      <div
        className="
          flex items-center justify-center 
          text-base md:text-xl font-normal text-center tracking-wide 
          leading-relaxed 
          mb-0 md:mb-4
          h-[3rem] sm:h-[4.5rem]
        "
      >
        {feature.title}
      </div>
    </div>
  );
}
