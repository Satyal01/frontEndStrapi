import React, { useState } from 'react'

const CrouselDiv = ({ data }) => {

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
        <div className="h-full p-3   relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="text-base text-white hidden lg:block self-end shadow size-8 lg:size-10 bg-[#9590e4] rounded-full mr-2 "
                    disabled={currentIndex === 0}
                >
                    &larr;
                </button>

                {/* Image Track */}
                <div className="overflow-hidden w-full  ">
                    <div
                        className="flex transition-transform duration-500  ease-in-out"
                        style={{
                            transform: `translateX(-${(100 / visibleCount) * currentIndex}%)`,
                            width: `${(100 / visibleCount) * images.length}%`,
                        }}
                    >
                        

                        {images.map((img) => (
                                <div key={img.id} className="lg:block w-[calc(100%/9)] shadow-lg flex-shrink-0 px-1">
                                    <img
                                        src={img.imageLink}
                                        alt={`Slide ${img.id}`}
                                        className=" object-cover rounded"
                                    />
                                </div>
                        ))}
                    </div>
                </div>

                {/* Right Button */}
                <div className='self-end'>
                    <button
                        onClick={prevSlide}
                        className=" lg:hidden text-white text-base self-end size-8 lg:size-10  bg-button-bgcolor rounded-full mr-2 "
                        disabled={currentIndex === 0}
                    >
                        &larr;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="self-end text-white text-base size-8 lg:size-10   bg-button-bgcolor rounded-full ml-2 "
                        disabled={currentIndex === maxIndex}
                    >
                        &rarr;
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CrouselDiv


 {/* <div key={img.id} className="lg:hidden w-[calc(100%/2)] shadow-lg flex-shrink-0 px-1">
                                    <img
                                        src={img.imageLink}
                                        alt={`Slide ${img.id}`}
                                        className=" object-cover rounded"
                                    />
                                </div> */}