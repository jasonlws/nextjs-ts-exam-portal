import { configureStore } from "@reduxjs/toolkit";
import questionsRender from "./questionSlice";

const store = configureStore({
    reducer: {
        questions: questionsRender,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
