import { FaBus, FaParking, FaChild } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdOutlineFoodBank, MdKitchen } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { BsCupHotFill } from "react-icons/bs";
import { CgGym } from "react-icons/cg";

interface Button {
    id: string;
    url: string;
    text: string;
    type: string;
    newTab: boolean;
}

interface GridElementProps {
    id: string;
    title: string;
    description: string;
    icon: string;
    button: Button;
}

interface GridListProps {
    data: {
        id: string;
        title: string;
        description: string;
        gridElement: GridElementProps[];
    };
}

function RenderIcons({ social }: { social: string | undefined }) {
    switch (social) {
        case "POKOJE":
            return <IoIosBed size="27" />;
        case "JADALNIA":
            return <MdOutlineFoodBank size="27" />;
        case "PKP":
            return <FaBus size="27" />;
        case "SNIADANIA":
            return <BsCupHotFill size="27" />;
        case "KUCHNIA":
            return <MdKitchen size="27" />;
        case "PARKING":
            return <FaParking size="27" />;
        case "SILOWNIA":
            return <CgGym size="27" />;
        case "BAWIALNIA":
            return <FaChild size="27" />;
        case "APTEKA":
            return <AiFillMedicineBox size="27" />;
        default:
            return null;
    }
}

export default function GridList({ data }: GridListProps) {
    return (
        <section className="bg-white">
            <div className="container px-6 py-10 mx-auto text-center">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
                    {data.title}
                </h1>
                <p className="mt-4 text-gray-500 xl:mt-6">{data.description}</p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    {data.gridElement.map((element, index) => (
                        <div className="space-y-3" key={index}>
                            {element.icon && (
                                <div className="flex justify-center">
                                    <RenderIcons social={element.icon} />
                                </div>
                            )}

                            <h1 className="text-xl font-semibold text-gray-700 capitalize">
                                {element.title}
                            </h1>

                            <p className="text-gray-500">
                                {element.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
