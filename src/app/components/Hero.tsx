"use client";
import { useEffect, useState } from "react";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";

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

interface HeroProps {
    data: {
        id: string;
        title: string;
        description: string;
        picture: Picture;
        buttons: Button[];
    };
}

export default function Hero({ data }: HeroProps) {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const imgUrl = getStrapiMedia(data.picture.data.attributes.url);
    const [hideOnMobile, setHideOnMobile] = useState(false);
    useEffect(() => {
        setHideOnMobile(isTabletOrMobile);
    }, [isTabletOrMobile]);

    return (
        <section className="mb-10 overflow-hidden mx-auto">
            <div
                style={{
                    backgroundImage: `url(${imgUrl || ""})`,
                    clipPath: !hideOnMobile
                        ? "polygon(0 0, 100% 0, 100% 100%,98% 96%, 96% 95%,95% 91%, 92% 95%, 89% 89%,82% 97%, 81% 96%,79% 95%,76% 99%,70% 92%,63% 98%,62% 99%,53% 91%,51% 87%,49% 91%,39% 103%,35% 91%,32% 92%,28% 96%,18% 94%,15% 96%,12% 90%,8% 95%,0 100%,0 100%)"
                        : "",
                }}
                className={clsx(
                    `relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px]`
                )}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
                    <div className="flex h-full items-center justify-center">
                        <div className="px-6 text-center text-white md:px-12">
                            <h1 className=" mb-12 text-4xl font-bold tracking-tight md:mt-6 md:mb-16 md:text-6xl xl:text-7xl">
                                {data.title}
                            </h1>
                            <div className="inline-grid md:inline-flex">
                                {data.buttons.map(
                                    (button: Button, index: number) => (
                                        <a
                                            className={renderButtonStyle(
                                                button.type
                                            )}
                                            key={index}
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            href={button.url}
                                            role="button"
                                            target={
                                                button.newTab
                                                    ? "_blank"
                                                    : "_self"
                                            }
                                        >
                                            {button.text}
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
