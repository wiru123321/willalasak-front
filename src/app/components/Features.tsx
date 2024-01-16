import Link from "next/link";
import { getStrapiMedia } from "../utils/api-helpers";

interface FeaturesProps {
    data: {
        heading: string;
        description: string;
        feature: Feature[];
    };
}

interface Media {
    data: {
        id: string;
        attributes: {
            url: string;
            name: string;
            alternativeText: string;
        };
    };
}

interface Feature {
    id: string;
    title: string;
    description: string;
    showLink: boolean;
    newTab: boolean;
    url: string;
    text: string;
    media: Media;
}

function Feature({
    title,
    description,
    showLink,
    newTab,
    url,
    text,
    media,
}: Feature) {
    const imgUrl = getStrapiMedia(media.data.attributes.url);
    return (
        <div className="flex flex-col items-center p-4">
            <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <img
                    className="w-[100%] max-h-[150px] object-cover rounded-t-lg sm:max-h-[220px]"
                    src={imgUrl || ""}
                    alt={media.data.attributes.alternativeText || ""}
                />
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                        {title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600">
                        {description}
                    </p>
                    {showLink && url && text && (
                        <div>
                            <Link
                                href={url}
                                target={newTab ? "_blank" : "_self"}
                                className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-black transition duration-200 ease-in-out bg-[#84a98c] rounded-lg hover:bg-[#cad2c5]"
                            >
                                {text}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Features({ data }: FeaturesProps) {
    console.log(data);
    return (
        <section className="px-6 m:py-12 lg:py-12">
            <div className="container mx-auto py-4 space-y-2 text-center">
                <h2 className="text-5xl font-bold">{data.heading}</h2>
                <p>{data.description}</p>
            </div>
            <div className="container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.feature.map((feature: Feature, index: number) => (
                    <Feature key={index} {...feature} />
                ))}
            </div>
        </section>
    );
}
