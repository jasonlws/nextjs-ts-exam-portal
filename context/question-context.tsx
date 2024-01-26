"use client";

import { createContext, useContext, useState } from "react";

type questionContextType = {
    question: string;
    updateQuestion: () => void;
};

const questionContextDefaultValues: questionContextType = {
    question: "",
    updateQuestion: () => {},
};

const QuestionContext = createContext<questionContextType>(
    questionContextDefaultValues
);

export function useQuestion() {
    return useContext(QuestionContext);
}

export default function QuestionContextProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [question, setQuestion] = useState<string>("");

    const updateQuestion = () => {
        setQuestion("Hello");
    };

    const value = {
        question,
        updateQuestion,
    };
    return (
        <>
            <QuestionContext.Provider value={value}>
                {children}
            </QuestionContext.Provider>
        </>
    );
}
