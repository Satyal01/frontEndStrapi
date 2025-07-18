import React from 'react'


const Slider = ({ data }) => {
  const brands = Array.isArray(data?.sliderWindow) ? data.sliderWindow : [];

  return (
    <div className="overflow-hidden bg-white py-6">
      <div className="relative">
        <div className="flex animate-slideLooplg  whitespace-nowrap gap-10 lg:gap-8">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={brand.href}
              className="shrink-0 w-30 lg:w-40 h-20 flex items-center justify-center"
            >
              <img
                src={brand.src}
                alt={`brand-${brand.id}`}
                className="object-contain h-full max-w-full"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

};
export default Slider
