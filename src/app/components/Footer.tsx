"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

interface FooterLink {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
    social?: string;
}

interface Company {
    id: number;
    title: string;
    phoneNumber: string;
    email: string;
    address?: string;
}

function FooterLink({ url, text }: FooterLink) {
    const path = usePathname();
    return (
        <li className="flex">
            <Link href={url}>{text}</Link>
        </li>
    );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
    switch (social) {
        case "WEBSITE":
            return <CgWebsite />;
        case "TWITTER":
            return <AiFillTwitterCircle />;
        case "YOUTUBE":
            return <AiFillYoutube />;
        case "DISCORD":
            return <FaDiscord />;
        case "FACEBOOK":
            return <FaFacebook />;
        case "INSTAGRAM":
            return <FaInstagram />;
        default:
            return null;
    }
}

export default function Footer({
    logoUrl,
    logoText,
    legalLinks,
    socialLinks,
    companyInformation,
    description,
    subtitle,
    socialTitle,
    socialDescription,
    copyrights,
}: {
    logoUrl: string | null;
    logoText: string | null;
    legalLinks: Array<FooterLink>;
    socialLinks: Array<FooterLink>;
    companyInformation: Company;
    description: string | null;
    subtitle: string | null;
    socialTitle: string | null;
    socialDescription: string | null;
    copyrights: string | null;
}) {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <Logo src={logoUrl}>
                        {logoText && (
                            <h2 className="text-2xl font-bold">{logoText}</h2>
                        )}
                    </Logo>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-sm text-gray-800">{subtitle}</p>
                        <p className="mt-4 text-sm text-gray-800">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">
                        {companyInformation.title}
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Telefon:</p>
                        <a
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            {companyInformation.phoneNumber}
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a
                            href="mailto:info@lorem.mail"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            {companyInformation.email}
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Adres:</p>
                        <a
                            href="https://www.google.com/maps/place/Willa+Lasak+-+Bia%C5%82y+Dunajec/@49.3794152,20.0093441,17z/data=!3m1!4b1!4m6!3m5!1s0x4715f176a2f6d08f:0xd227a2a30f6fd96c!8m2!3d49.3794117!4d20.011919!16s%2Fg%2F11l7811plx?entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Our address"
                            title="Our address"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            {companyInformation.address}
                        </a>
                    </div>
                </div>
                <div>
                    <span className="text-base font-bold tracking-wide text-gray-900">
                        {socialTitle}
                    </span>
                    <div className="flex pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        {socialLinks.map((link: FooterLink) => {
                            return (
                                <a
                                    key={link.id}
                                    rel="noopener noreferrer"
                                    href={link.url}
                                    title={link.text}
                                    target={link.newTab ? "_blank" : "_self"}
                                    className="flex items-center justify-center h-10 rounded-full"
                                >
                                    <RenderSocialIcon social={link.social} />
                                </a>
                            );
                        })}
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        {socialDescription}
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">{copyrights}</p>
            </div>
        </div>
    );
}
