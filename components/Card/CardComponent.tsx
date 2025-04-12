export default function CardComponent({
    title,
    children,
}: Readonly<{
    title: string;
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* Card */}
            <div className="flex flex-col rounded-lg  bg-zinc-200 w-1/2 h-1/3">
                {/* Title */}
                <div className="flex flex-col bg-zinc-100 rounded-t-lg m-0 p-2">
                    <div className="text-2xl font-medium">{title}</div>
                </div>
                {/* Content */}
                {children}
            </div>
        </>
    );
}
