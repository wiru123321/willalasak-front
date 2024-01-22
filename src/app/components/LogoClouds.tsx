"use client";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";

interface Picture {
    id: string;
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

interface LogoCloudsProps {
    data: {
        id: string;
        title: string;
        logos: Picture[];
    };
}

export default function LogoClouds({ data }: LogoCloudsProps) {
    const numberOfItems = data.logos.length;
    return (
        <div className="container mx-auto md:px-6">
            <section className="mb-24 text-center">
                <h2 className="mb-16 text-5xl font-bold">{data.title}</h2>
                {numberOfItems > 0 && (
                    <div
                        className={`grid px-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-${numberOfItems}`}
                    >
                        {data.logos.map((logo: Picture, index: number) => (
                            <div key={index} className="mx-auto mb-12 lg:mb-0">
                                <img
                                    className="max-w-[150px] dark:brightness-150"
                                    src={
                                        getStrapiMedia(
                                            logo.picture.data.attributes.url
                                        ) || ""
                                    }
                                    alt={
                                        logo.picture.data.attributes
                                            .alternativeText || ""
                                    }
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
