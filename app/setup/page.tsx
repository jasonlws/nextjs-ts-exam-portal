import Link from "next/link";
import HeaderComponent from "@/components/Header/HeaderComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
import LinkButtonComponent from "@/components/Button/LinkButtonComponent";

export default function SetupPage() {
    return (
        <>
            <div className="flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <HeaderComponent />
                {/* Main */}
                <main className="flex items-center justify-center h-screen bg-zinc-300">
                    {/* Box */}
                    <div className="flex flex-col rounded-lg  bg-zinc-200 w-1/2 h-1/3">
                        {/* Instruction */}
                        <div className="flex flex-col bg-zinc-100 rounded-t-lg m-0 p-2">
                            <div className="text-2xl font-medium">
                                Instruction
                            </div>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col items-center text-xl h-full font-medium m-0 p-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Exercitationem ipsam voluptatum quod
                            laboriosam, libero suscipit ratione magni sequi
                            harum! Quisquam dolores et consectetur minus aliquid
                            dolorum eius, placeat modi assumenda.
                        </div>
                        {/* Start */}
                        <div className="group flex flex-col justify-center md:space-y-0 md:space-x-4 md:flex-row m-0 p-4">
                            <LinkButtonComponent href="/setup/step1">
                                Start
                            </LinkButtonComponent>
                        </div>
                    </div>
                </main>
                {/* Footer */}
                <FooterComponent />
            </div>
        </>
    );
}
