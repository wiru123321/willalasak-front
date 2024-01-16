import Link from "next/link";

export default function Logo({
    src,
    children,
}: {
    src: string | null;
    children?: React.ReactNode;
}) {
    return (
        <Link
            href="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
        >
            {src && <img src={src} alt="logo" width={200} height={100} />}
            <div className="ml-2">{children}</div>
        </Link>
    );
}
