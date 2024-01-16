import type { Metadata } from "next";
import "./globals.css";
import { getStrapiMedia, getStrapiURL } from "./utils/api-helpers";
import { fetchAPI } from "./utils/fetch-api";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

async function getGlobal(): Promise<any> {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    if (!token)
        throw new Error(
            "The Strapi API Token environment variable is not set."
        );

    const path = `/global`;
    const options = { headers: { Authorization: `Bearer ${token}` } };

    const urlParamsObject = {
        populate: [
            "metadata.shareImage",
            "favicon",
            "notificationBanner.link",
            "navbar.links",
            "navbar.navbarLogo.logoImg",
            "navbar.navbarLogoBlack.logoImg",
            "footer.footerLogo.logoImg",
            "footer.companyInformation",
            "footer.socialTitle",
            "footer.description",
            "footer.socialDescription",
            "footer.copyrights",
            "footer.subtitle",
            "footer.legalLinks",
            "footer.socialLinks",
        ],
    };
    return await fetchAPI(path, urlParamsObject, options);
}

export async function generateMetadata(): Promise<Metadata> {
    const meta = await getGlobal();

    const { metadata, favicon } = meta.data.attributes;
    const { url } = favicon.data.attributes;

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription,
        icons: {
            icon: [new URL(url, getStrapiURL())],
        },
        keywords: metadata.keywords,
    };
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const global = await getGlobal();
    const { title, description, icons, keywords } = await generateMetadata();
    // TODO: CREATE A CUSTOM ERROR PAGE
    if (!global.data) return null;

    const { notificationBanner, navbar, footer } = global.data.attributes;

    const navbarLogoUrl = getStrapiMedia(
        navbar.navbarLogo.logoImg.data.attributes.url
    );

    const navbarLogoUrlBlack = getStrapiMedia(
        navbar.navbarLogoBlack.logoImg.data.attributes.url
    );

    const footerLogoUrl = getStrapiMedia(
        footer.footerLogo.logoImg.data.attributes.url
    );

    return (
        <html>
            <title>{(title as String) || ""}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta
                name="description"
                content={description || ""}
                key="description"
            />
            <meta name="keywords" content={(keywords as string) || ""} />
            <meta
                property="og:title"
                content={(title as string) || ""}
                key="og:title"
            />
            <meta
                property="og:description"
                content={description || ""}
                key="og:description"
            />
            <body>
                <Navbar
                    links={navbar.links}
                    logoUrl={navbarLogoUrl}
                    navbarLogoBlack={navbarLogoUrlBlack}
                    logoText={navbar.navbarLogo.logoText}
                />

                <main className="min-h-screen">{children}</main>

                <Banner data={notificationBanner} />

                <Footer
                    logoUrl={footerLogoUrl}
                    logoText={footer.footerLogo.logoText}
                    companyInformation={footer.companyInformation}
                    legalLinks={footer.legalLinks}
                    socialLinks={footer.socialLinks}
                    socialDescription={footer.socialDescription}
                    socialTitle={footer.socialTitle}
                    description={footer.description}
                    subtitle={footer.subtitle}
                    copyrights={footer.copyrights}
                />
            </body>
        </html>
    );
}
