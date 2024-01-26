import Link from "next/link";

export default function LinkButtonComponent({
    href,
    children,
}: Readonly<{
    href: string;
    children: React.ReactNode;
}>) {
    return (
        <>
            <Link
                href={href}
                className="trasition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg w-3/12 group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg"
            >
                <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700 text-center">
                    {children}
                </div>
            </Link>
        </>
    );
}
