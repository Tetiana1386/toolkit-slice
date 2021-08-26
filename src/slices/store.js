import projectReducer from './projectSlice';
import columnReducer, { createColumn } from './columnSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        projects: projectReducer,
        columns: columnReducer,
    },
});

store.dispatch(createColumn({}));
export default store;