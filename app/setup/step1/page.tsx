"use client";
import Link from "next/link";
import React, { useState } from "react";
import HeaderComponent from "@/components/Header/HeaderComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
import { useQuestions } from "@/context/questions/QuestionsContext";
import LinkButtonComponent from "@/components/Button/LinkButtonComponent";

export default function SetupStep1() {
    const [files, setFiles] = useState("");
    const { questions } = useQuestions();

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
                <HeaderComponent />
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
                            <p>
                                Context:{" "}
                                {questions.map((question) => question.id)}
                            </p>
                        </div>
                        {/* Start */}
                        <div className="flex flex-col justify-end md:space-y-0 md:space-x-4 md:flex-row p-4">
                            <LinkButtonComponent href="/setup">
                                Back
                            </LinkButtonComponent>
                            <LinkButtonComponent href="/setup/step2">
                                Next
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
