"use client";
import TimerComponent from "@/components/Timer/TimerComponent";
import LinkButtonComponent from "@/components/Button/LinkButtonComponent";
import QuestionAnswerComponent from "@/components/QuestionAnswer/QuestionAnswerComponent";
import { useQuestions } from "@/context/questions/QuestionsContext";

export default function QuestionIdPage({ params }: { params: { id: string } }) {
    const { questions } = useQuestions();
    const target = questions.filter((question) => question.uid == params.id)[0];
    return (
        <>
            <div className="flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="flex flex-row justify-between w-full text-center border-b border-grey p-4">
                    <div className="">Name</div>
                    <div className="">
                        <TimerComponent
                            countDownDate={new Date().getTime() + 100000}
                        />
                    </div>
                </header>
                {/* Main */}
                <main className="flex flex-col justify-center h-screen bg-zinc-300">
                    {/* Tool */}
                    <div className="flex flex-row justify-between w-full p-4 bg-zinc-200 md:space-y-0 md:space-x-4 md:flex-row ">
                        <div>Calculator</div>
                        <div>Flag for Review</div>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col p-4 h-full">
                        <div>{target.content}</div>
                        <div>
                            {target.options.map((option) => (
                                <p>{option.content}</p>
                            ))}
                        </div>
                    </div>
                </main>
                {/* Footer */}
                <footer className="flex flex-row w-full justify-end border-t border-gery p-0">
                    <LinkButtonComponent href="/review">
                        Finish
                    </LinkButtonComponent>
                    <LinkButtonComponent href="/question/1">
                        Previous
                    </LinkButtonComponent>
                    <LinkButtonComponent href="/question/2">
                        Next
                    </LinkButtonComponent>
                </footer>
            </div>
        </>
    );
}
