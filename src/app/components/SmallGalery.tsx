import Link from "next/link";
import { getStrapiMedia } from "../utils/api-helpers";

interface Picture {
    id: string;
    attributes: {
        url: string;
        name: string;
        alternativeText: string;
    };
}

interface SmallGaleryProps {
    data: {
        id: string;
        title: string;
        description: string;
        pictures: {
            data: Picture[];
        };
        showLink: boolean;
        newTab: boolean;
        url: string;
        text: string;
    };
}

export default function SmallGalery({ data }: SmallGaleryProps) {
    return (
        <section className="mb-10 px-6 overflow-hidden container mx-auto justify-center">
            <div className="container mx-auto py-4 space-y-2 text-center">
                <h2 className="text-5xl font-bold">{data.title}</h2>
                <p>{data.description}</p>
            </div>
            <div className="container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2">
                {data.pictures.data.map((picture: Picture, index: number) => (
                    <div key={index}>
                        <img
                            className="h-auto max-w-full rounded-lg sm:h-[100%]"
                            src={getStrapiMedia(picture.attributes.url) || ""}
                            alt={picture.attributes.alternativeText || ""}
                        />
                    </div>
                ))}
            </div>
            {data.showLink && data.url && data.text && (
                <div className="flex justify-center mt-2">
                    <Link
                        href={data.url}
                        target={data.newTab ? "_blank" : "_self"}
                        className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-black transition duration-200 ease-in-out bg-[#84a98c] rounded-lg hover:bg-[#cad2c5]"
                    >
                        {data.text}
                    </Link>
                </div>
            )}
        </section>
    );
}
