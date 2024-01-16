"use client";
import { useState } from "react";
import { getStrapiMedia } from "../utils/api-helpers";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

interface Picture {
    id: string;
    attributes: {
        url: string;
        name: string;
        alternativeText: string;
    };
}

interface CarouselProps {
    data: {
        id: string;
        pictures: { data: Picture[] };
    };
}

export default function Carousel({ data }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide
            ? data.pictures.data.length - 1
            : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === data.pictures.data.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <section className="mb-10 overflow-hidden container mx-auto">
            <div className="max-w-2xl mx-auto mb-16 text-center">
                <h2 className="text-2xl font-bold lg:text-5xl">Galeria</h2>
            </div>
            <div className="max-w-[1400px] h-[70vh] w-full m-auto px-4 relative group">
                <div
                    style={{
                        backgroundImage: `url(${getStrapiMedia(
                            data.pictures.data[currentIndex].attributes.url
                        )})`,
                    }}
                    className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                ></div>
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <AiOutlineArrowLeft onClick={prevSlide} size={30} />
                </div>
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <AiOutlineArrowRight onClick={nextSlide} size={30} />
                </div>
                <div className="flex top-4 justify-center py-2">
                    {data.pictures.data.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className="text-2xl cursor-pointer"
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
