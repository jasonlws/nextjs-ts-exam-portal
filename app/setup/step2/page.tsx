export default function SetupStep2() {
    return (
        <>
            <div className="flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="w-full text-center border-b border-grey p-4">
                    Exam Portal
                </header>
                {/* Main */}
                <main className="flex items-center justify-center h-screen bg-zinc-300">
                    {/* Box */}
                    <div className="flex flex-col p-2 mx-6 rounded-2xl  bg-zinc-200 w-1/2 h-1/3 m-0 p-0">
                        {/* Instruction */}
                        <div className="flex flex-col md:flex-row bg-zinc-100 rounded-t-lg m-0 p-2">
                            <div className="text-2xl font-medium ">Step 1</div>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col items-center text-xl h-full font-medium m-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Exercitationem ipsam voluptatum quod
                            laboriosam, libero suscipit ratione magni sequi
                            harum! Quisquam dolores et consectetur minus aliquid
                            dolorum eius, placeat modi assumenda.
                        </div>
                        {/* Start */}
                        <div className="flex flex-col justify-end md:space-y-0 md:space-x-4 md:flex-row p-4">
                            <button className="trasition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg w-3/12 hover:border-t-8 hover:border-b-0 hover:bg-blue-700 hover:border-t-blue-700 hover:shadow-lg">
                                <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                                    Back
                                </div>
                            </button>
                            <button className="trasition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg w-3/12 hover:border-t-8 hover:border-b-0 hover:bg-blue-700 hover:border-t-blue-700 hover:shadow-lg">
                                <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                                    Start
                                </div>
                            </button>
                        </div>
                    </div>
                </main>
                {/* Footer */}
                <footer className="w-full text-center border-t border-gery p-4">
                    Copyright
                </footer>
            </div>
        </>
    );
}
