"use client";
import { useQuestions } from "@/context/questions/QuestionsContext";

export default function QuestionAnswerComponent({
    uid,
    children,
}: Readonly<{
    uid: string;
    children: React.ReactNode;
}>) {
    const { questions } = useQuestions();
    const target = questions.filter((question) => question.uid == uid)[0];
    return (
        <>
            <div className="flex flex-col p-4 h-full">
                <div>{target.content}</div>
                <div>
                    {target.options.map((option) => (
                        <p>{option.content}</p>
                    ))}
                </div>
            </div>
        </>
    );
}
