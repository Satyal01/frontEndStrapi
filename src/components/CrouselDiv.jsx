import React,{useState} from 'react'

const CrouselDiv = ({data}) => {

    const images = data.imageLink;
    const visibleCount = 6;
    const [currentIndex, setCurrentIndex] = useState(0);

    const maxIndex = images.length - visibleCount;

    const prevSlide = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const nextSlide = () => {
        if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
    };

    return (
        <div className=" p-3   relative overflow-hidden">
            <div className="flex items-center">
                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className=" self-end shadow p-2 bg-[#9590e4] rounded-full mr-2 disabled:opacity-50"
                    disabled={currentIndex === 0}
                >
                    ◀
                </button>

                {/* Image Track */}
                <div className="overflow-hidden w-full ">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${(100 / visibleCount) * currentIndex}%)`,
                            width: `${(100 / visibleCount) * images.length}%`,
                        }}
                    >
                        {images.map((img, idx) => (
                            <div key={idx} className=" w-[calc(100%/9)] shadow-lg flex-shrink-0 px-1">
                                <img
                                    src={img.imageLink}
                                    alt={`Slide ${idx}`}
                                    className=" object-cover rounded"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    className="self-end  shadow p-2 bg-[#9590e4] rounded-full ml-2 disabled:opacity-50"
                    disabled={currentIndex === maxIndex}
                >
                    ▶
                </button>
            </div>
            
        </div>
    )
}

export default CrouselDiv
