"use client";
import { getStrapiMedia } from "../utils/api-helpers";
import { useState } from "react";

interface Button {
    id: string;
    type: string;
}

interface Picture {
    id: string;
    type: string;
    picture: {
        data: {
            id: string;
            attributes: {
                url: string;
                name: string;
                alternativeText: string;
            };
        };
    };
}

interface GaleryProps {
    data: {
        id: string;
        pictures: Picture[];
        buttons: Button[];
    };
}

const selectedButton =
    "text-[#84a98c] hover:text-black border border-[#84a98c] bg-white hover:bg-[#cad2c5] focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3";

const normalButton =
    "text-black border border-white hover:border-[#84a98c] bg-white focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3";

export default function Galery({ data }: GaleryProps) {
    const [selectedType, setSelectedType] = useState("Wszystkie");
    console.log(data.pictures);
    return (
        <section className="mb-10 overflow-hidden container mx-auto justify-center">
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                {data.buttons.map((button: Button, index: number) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedType(button.type)}
                        className={
                            selectedType === button.type
                                ? selectedButton
                                : normalButton
                        }
                    >
                        {button.type}
                    </button>
                ))}
            </div>
            <div className="container px-6 mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2">
                {data.pictures.map((picture: Picture, index: number) =>
                    selectedType === data.buttons[0].type ? (
                        <div key={index}>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={
                                    getStrapiMedia(
                                        picture.picture.data.attributes.url
                                    ) || ""
                                }
                                alt={
                                    picture.picture.data.attributes
                                        .alternativeText || ""
                                }
                            />
                        </div>
                    ) : selectedType === picture.type ? (
                        <div key={index}>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={
                                    getStrapiMedia(
                                        picture.picture.data.attributes.url
                                    ) || ""
                                }
                                alt={
                                    picture.picture.data.attributes
                                        .alternativeText || ""
                                }
                            />
                        </div>
                    ) : null
                )}
            </div>
        </section>
    );
}
