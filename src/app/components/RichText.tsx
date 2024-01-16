import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RichTextProps {
    data: {
        content: string;
    };
}

export default function RichText({ data }: RichTextProps) {
    // TODO: STYLE THE MARKDOWN
    return (
        <section className="mb-10 mt-20 px-6 rich-text overflow-hidden container mx-auto justify-center text-center max-w-3xl">
            <Markdown children={data.content} remarkPlugins={[remarkGfm]} />
        </section>
    );
}
