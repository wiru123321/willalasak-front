import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";
import Map from "../components/Map";
import Contact from "../components/Contact";
import GridList from "../components/GridList";
import TitleWithPicture from "../components/TitleWithPicture";
import SmallGalery from "../components/SmallGalery";
import Galery from "../components/Galery";
import RichText from "../components/RichText";

export function sectionRenderer(section: any, index: number) {
    console.log(section);
    switch (section.__component) {
        case "sections.hero":
            return <Hero key={index} data={section} />;
        case "sections.image-carousel":
            return <Carousel key={index} data={section} />;
        case "sections.contact":
            return <Contact key={index} data={section} />;
        case "sections.rich-text":
            return <RichText key={index} data={section} />;
        case "sections.grid-list":
            return <GridList key={index} data={section} />;
        case "sections.title-with-picture":
            return <TitleWithPicture key={index} data={section} />;
        case "sections.small-galery":
            return <SmallGalery key={index} data={section} />;
        case "sections.galery":
            return <Galery key={index} data={section} />;
        case "sections.google-map-element":
            return <Map key={index} data={section} />;
        case "sections.features":
            return <Features key={index} data={section} />;
        case "sections.testimonials-group":
            return <Testimonials key={index} data={section} />;
        default:
            return null;
    }
}
