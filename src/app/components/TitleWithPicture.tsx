import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
    id: string;
    url: string;
    text: string;
    type: string;
    newTab: boolean;
}

interface Picture {
    data: {
        id: string;
        attributes: {
            url: string;
            name: string;
            alternativeText: string;
        };
    };
}

interface TitleWithPictureProps {
    data: {
        id: string;
        title: string;
        description: string;
        picture: Picture;
        button: Button;
        reverse: boolean;
        cardDesign: boolean;
    };
}

export default function TitleWithPicture({ data }: TitleWithPictureProps) {
    const imgUrl = getStrapiMedia(data.picture.data.attributes.url);
    return (
        <div className="container my-24 mx-auto md:px-6">
            {data.cardDesign ? (
                <section className="mb-32">
                    <div className="container mx-auto px-6 text-center lg:text-left xl:px-32">
                        <div className="flex grid items-center lg:grid-cols-2">
                            <div
                                className={`mb-12 lg:mb-0 ${
                                    data.reverse && "order-2"
                                }`}
                            >
                                <div
                                    className={`relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] md:px-12 ${
                                        data.reverse ? "lg:-ml-14" : "lg:-mr-14"
                                    }`}
                                >
                                    <h2 className="mb-8 text-3xl font-bold">
                                        {data.title}
                                    </h2>
                                    <p className="mb-8 pb-2 text-neutral-500 lg:pb-0">
                                        {data.description}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <img
                                    src={imgUrl || ""}
                                    className="w-full rounded-lg shadow-lg"
                                    alt={
                                        data.picture.data.attributes
                                            .alternativeText || ""
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div className="bg-base-200">
                    <div
                        className={`flex items-center justify-center gap-8 p-4 text-center lg:text-left flex-col ${
                            data.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                        }`}
                    >
                        <img
                            src={imgUrl || ""}
                            className="max-w-sm rounded-lg shadow-2xl"
                            alt={
                                data.picture.data.attributes.alternativeText ||
                                ""
                            }
                        />
                        <div>
                            <h1 className="text-5xl font-bold">{data.title}</h1>
                            <p className="py-6">{data.description}</p>
                            {data.button && (
                                <a
                                    className={renderButtonStyle(
                                        data.button.type
                                    )}
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    href={data.button.url}
                                    role="button"
                                >
                                    {data.button.text}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
