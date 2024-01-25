import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(far, fas, fab);

export default function ReviewPage() {
    return (
        <>
            {" "}
            <div className="flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="flex flex-row justify-between w-full text-center border-b border-grey p-4">
                    <div className="">Name</div>
                    <div className="">Time Remaining: 00:00</div>
                </header>
                {/* Main */}
                <main className="flex flex-col justify-center h-screen bg-zinc-300">
                    {/* Tool */}
                    <div className="flex flex-row justify-between w-full p-4 bg-zinc-200 md:space-y-0 md:space-x-4 md:flex-row ">
                        <div>Instruction</div>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col p-4 h-full">
                        <div className="">Item Review</div>
                        <div className="flex flex-row justify-between">
                            <div className="">Item Section</div>
                            <div className="">(14 unseen/Incomplete)</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row group  odd:bg-red-800 even:bg-green-800">
                                <div className="flex-none w-16">
                                    <FontAwesomeIcon icon={["fas", "flag"]} />
                                </div>
                                <div className="flex-auto">Question 1</div>
                                <div className="flex-auto">Incomplete</div>
                            </div>
                            <div className="flex flex-row group  odd:bg-red-800 even:bg-green-800">
                                <div className="flex-none w-16">
                                    <FontAwesomeIcon icon={["fas", "flag"]} />
                                </div>
                                <div className="flex-auto">Question 1</div>
                                <div className="flex-auto">Incomplete</div>
                            </div>
                            <div className="flex flex-row group  odd:bg-red-800 even:bg-green-800">
                                <div className="flex-none w-16">
                                    <FontAwesomeIcon icon={["fas", "flag"]} />
                                </div>
                                <div className="flex-auto">Question 1</div>
                                <div className="flex-auto">Incomplete</div>
                            </div>
                        </div>
                    </div>
                </main>
                {/* Footer */}
                <footer className="flex flex-row w-full justify-end border-t border-gery p-0">
                    <button className="flex-none trasition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700  w-64 hover:border-t-8 hover:border-b-0 hover:bg-blue-700 hover:border-t-blue-700 hover:shadow-lg">
                        <div className="px-8 py-4 duration-150 bg-blue-500 group-hover:bg-blue-700">
                            Previous
                        </div>
                    </button>
                    <button className="flex-none trasition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 w-64 hover:border-t-8 hover:border-b-0 hover:bg-blue-700 hover:border-t-blue-700 hover:shadow-lg">
                        <div className="px-8 py-4 duration-150 bg-blue-500 group-hover:bg-blue-700">
                            Next
                        </div>
                    </button>
                </footer>
            </div>
        </>
    );
}
