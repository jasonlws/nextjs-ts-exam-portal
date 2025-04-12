import HeaderComponent from "@/components/Header/HeaderComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
import LinkButtonComponent from "@/components/Button/LinkButtonComponent";
import CardComponent from "@/components/Card/CardComponent";

export default function Home() {
    return (
        <>
            <div className="flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <HeaderComponent />
                {/* Main */}
                <main className="flex items-center justify-center h-screen bg-zinc-300">
                    {/* Card */}
                    <CardComponent title="Instruction">
                        <div className="flex flex-col items-center text-xl h-full font-medium m-0 p-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Exercitationem ipsam voluptatum quod
                            laboriosam, libero suscipit ratione magni sequi
                            harum! Quisquam dolores et consectetur minus aliquid
                            dolorum eius, placeat modi assumenda.
                        </div>
                        {/* Start */}
                        <div className="group flex flex-col justify-center md:space-y-0 md:space-x-4 md:flex-row m-0 p-4">
                            <LinkButtonComponent href="/setup">
                                Start
                            </LinkButtonComponent>
                        </div>
                    </CardComponent>
                </main>
                {/* Footer */}
                <FooterComponent />
            </div>
        </>
    );
}
