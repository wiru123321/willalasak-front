"use client";
import GoogleMapReact from "google-map-react";
import { FiMail, FiHome, FiPhoneCall } from "react-icons/fi";
import { IoIosPin } from "react-icons/io";

interface ContactElement {
    id: string;
    title: string;
    description: string;
    icon: string;
}

interface ContactProps {
    data: {
        id: string;
        title: string;
        contactElement: ContactElement[];
    };
}

const defaultProps = {
    center: {
        lat: 49.3794152,
        lng: 20.0093441,
    },
    zoom: 11,
};

function RenderContactIcon(icon: string) {
    switch (icon) {
        case "PHONE":
            return <FiPhoneCall />;
        case "ADDRESS":
            return <FiHome />;
        case "MAIL":
            return <FiMail />;
        default:
            return null;
    }
}

export default function Contact({ data }: ContactProps) {
    const LocationPin = ({ text }: { text: string }) => (
        <div>
            <IoIosPin size={40} />
            <p className="text-l">{text}</p>
        </div>
    );
    return (
        <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32">
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <div className="flex flex-wrap items-center">
                        <div className="block order-2 w-full shrink-0 grow-0 basis-auto lg:order-1 lg:flex lg:w-6/12 xl:w-4/12 ">
                            <div className="h-[500px] w-full">
                                <iframe
                                    src="https://storage.googleapis.com/maps-solutions-1v263nvwqz/locator-plus/39wx/locator-plus.html"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                        <div className="w-full order-1 shrink-0 grow-0 basis-auto lg:order-2 lg:w-6/12 xl:w-8/12">
                            <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                                {data.contactElement.map((element, index) => (
                                    <div
                                        className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12"
                                        key={index}
                                    >
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                    {RenderContactIcon(
                                                        element.icon
                                                    )}
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold">
                                                    {element.title}
                                                </p>
                                                <p className="text-neutral-500">
                                                    {element.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
