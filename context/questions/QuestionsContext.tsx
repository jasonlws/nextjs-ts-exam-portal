// "use client";

// import { ReactNode, createContext, useContext } from "react";

// interface IOptionContext {
//     id: number;
//     content: string;
// }

// interface IQuestionContext {
//     id: number;
//     uid: string;
//     content: string;
//     options: Array<IOptionContext>;
//     selects: Array<number>;
//     answers: Array<number>;
//     flagged: boolean;
// }

// type QuestionsContextType = {
//     questions: Array<IQuestionContext>;
//     toggleFlag: () => void;
// };

// export const QuestionsContext = createContext<QuestionsContextType | null>(
//     null
// );

// export default function QuestionsContextProvider({
//     children,
// }: Readonly<{ children: React.ReactNode }>) {
//     return (
//         <>
//             <QuestionsContext.Provider value={value}>
//                 {children}
//             </QuestionsContext.Provider>
//         </>
//     );
// }

// // const QuestionsContext = createContext<QuestionsContextType>({
// //     questions: [
// //         {
// //             id: 1,
// //             uid: "1",
// //             content: "Question 1",
// //             options: [
// //                 {
// //                     id: 1,
// //                     content: "Answer 1",
// //                 },
// //                 {
// //                     id: 2,
// //                     content: "Answer 2",
// //                 },
// //                 {
// //                     id: 3,
// //                     content: "Answer 3",
// //                 },
// //                 {
// //                     id: 4,
// //                     content: "Answer 4",
// //                 },
// //             ],
// //             selects: [],
// //             answers: [1, 2],
// //             flagged: false,
// //         },
// //         {
// //             id: 2,
// //             uid: "2",
// //             content: "Question 2",
// //             options: [
// //                 {
// //                     id: 1,
// //                     content: "Answer 1",
// //                 },
// //                 {
// //                     id: 2,
// //                     content: "Answer 2",
// //                 },
// //                 {
// //                     id: 3,
// //                     content: "Answer 3",
// //                 },
// //                 {
// //                     id: 4,
// //                     content: "Answer 4",
// //                 },
// //             ],
// //             selects: [],
// //             answers: [1, 2],
// //             flagged: false,
// //         },
// //         {
// //             id: 3,
// //             uid: "3",
// //             content: "Question 3",
// //             options: [
// //                 {
// //                     id: 1,
// //                     content: "Answer 1",
// //                 },
// //                 {
// //                     id: 2,
// //                     content: "Answer 2",
// //                 },
// //                 {
// //                     id: 3,
// //                     content: "Answer 3",
// //                 },
// //                 {
// //                     id: 4,
// //                     content: "Answer 4",
// //                 },
// //             ],
// //             selects: [1],
// //             answers: [1, 2],
// //             flagged: true,
// //         },
// //     ],
// // });

// export const useQuestions = () => useContext(QuestionsContext);
