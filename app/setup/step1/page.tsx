"use client";
import Link from "next/link";
import React, { useState } from "react";
import HeaderComponent from "@/components/header/header";
import FooterComponent from "@/components/footer/footer";
import { useQuestion } from "@/context/question-context";

export default function SetupStep1() {
    const [files, setFiles] = useState("");
    const { question, updateQuestion } = useQuestion();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileReader = new FileReader();
        if (event.target.files) {
            fileReader.readAsText(event.target.files[0], "UTF-8");
            fileReader.onload = (event) => {
                if (event.target) {
                    console.log("e.target.result", event.target.result);
                    // setFiles(e.target.result);
                }
            };
        }
    };

    return (
        <>
            <div className="flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="w-full text-center border-b border-grey p-4">
                    <HeaderComponent />
                </header>
                {/* Main */}
                <main className="flex items-center justify-center h-screen bg-zinc-300">
                    {/* Box */}
                    <div className="flex flex-col mx-6 rounded-2xl bg-zinc-200 w-1/2 h-1/3 m-0 p-0">
                        {/* Instruction */}
                        <div className="flex flex-col md:flex-row bg-zinc-100 rounded-t-lg m-0 p-2">
                            <div className="text-2xl font-medium ">Step 1</div>
                        </div>
                        {/* Content */}
                        <div className="flex flex-col items-center text-xl h-full font-medium m-2">
                            <input type="file" onChange={handleChange} />
                            <p>Context: {question}</p>
                            <button onClick={updateQuestion}>Test</button>
                        </div>
                        {/* Start */}
                        <div className="flex flex-col justify-end md:space-y-0 md:space-x-4 md:flex-row p-4">
                            <Link
                                href="/setup"
                                className="trasition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg w-3/12 hover:border-t-8 hover:border-b-0 hover:bg-blue-700 hover:border-t-blue-700 hover:shadow-lg"
                            >
                                <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700 text-center">
                                    Back
                                </div>
                            </Link>
                            <Link
                                href="/setup/step2"
                                className="trasition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg w-3/12 hover:border-t-8 hover:border-b-0 hover:bg-blue-700 hover:border-t-blue-700 hover:shadow-lg"
                            >
                                <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700 text-center">
                                    Next
                                </div>
                            </Link>
                        </div>
                    </div>
                </main>
                {/* Footer */}
                <footer className="w-full text-center border-t border-gery p-4">
                    <FooterComponent />
                </footer>
            </div>
        </>
    );
}
