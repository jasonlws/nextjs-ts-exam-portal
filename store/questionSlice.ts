import { createSlice } from "@reduxjs/toolkit";

interface IOption {
    id: number;
    content: string;
}

interface IQuestion {
    id: number;
    uid: string;
    content: string;
    options: Array<IOption>;
    selects: Array<number>;
    answers: Array<number>;
    flagged: boolean;
}

type SliceState = {
    questions: Array<IQuestion>;
};

const initialState: SliceState = {
    questions: [],
};

const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        getQuestions: (state, action) => {
            state.questions = action.payload;
        },
        getQuestion: (state, action) => {
            const index = state.questions.findIndex(
                (question) => question.id === action.payload.id
            );
            state.questions = action.payload;
        },
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
        },
    },
});

export const { getQuestions, getQuestion, addQuestion } = questionSlice.actions;
export default questionSlice.reducer;
