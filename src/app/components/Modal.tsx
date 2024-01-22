"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";

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

interface ModalProps {
    title: string | null;
    description: string | null;
    picture: string | null;
    button: string | null;
}

export default function Modal({
    title,
    description,
    picture,
    button,
}: ModalProps) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        let pop_status = sessionStorage.getItem("pop_status");
        if (!pop_status) {
            document.documentElement.classList.add("lock-body-scroll");
            setVisible(true);
            sessionStorage.setItem("pop_status", "pop_status");
        }
    }, []);
    if (!visible) return null;

    return (
        <>
            <div
                className="fixed z-10 overflow-y-auto top-0 w-full left-0"
                id="modal"
            >
                <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="sm:inline-block sm:align-middle sm:h-screen">
                        &#8203;
                    </span>
                    <div
                        className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div className="bg-white dark:bg-gray-800 px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                            <Logo src={picture} />
                            <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 dark:text-white">
                                {title}
                            </h1>
                            <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 dark:text-white">
                                {description}
                            </p>
                            <div className="mt-12 md:mt-14 w-full flex justify-center">
                                <button
                                    onClick={() => {
                                        document.documentElement.classList.remove(
                                            "lock-body-scroll"
                                        );
                                        setVisible(false);
                                    }}
                                    className="w-full sm:w-auto border border-gray-800 text-base font-semibold rounded text-gray-800 px-8 py-3"
                                >
                                    {button}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
