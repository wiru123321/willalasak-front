"use client";
import GoogleMapReact from "google-map-react";
import { IoIosPin } from "react-icons/io";

interface MapProps {
    data: {
        id: string;
        title: string;
    };
}

export default function Map({ data }: MapProps) {
    const LocationPin = ({ text }: { text: string }) => (
        <div>
            <IoIosPin size={40} />
            <p className="text-l">{text}</p>
        </div>
    );
    const defaultProps = {
        center: {
            lat: 11.99835602,
            lng: 75.01502627,
        },
        zoom: 11,
    };
    return (
        <section className="my-10 overflow-hidden container mx-auto justify-center">
            <div className="w-[100%] h-[90vh] sm:h-[50vh] mx-auto">
                {data.title && (
                    <h1 className="text-5xl font-bold leading-none text-center mb-5">
                        {data.title}
                    </h1>
                )}
                <iframe
                    src="https://storage.googleapis.com/maps-solutions-1v263nvwqz/locator-plus/39wx/locator-plus.html"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}
