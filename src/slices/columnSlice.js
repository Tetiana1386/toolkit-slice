import { createSlice } from '@reduxjs/toolkit';

const columnSlice = createSlice({
    name: 'columns',
    initialState: {},
    reducers: {
        createColumn(state, action) {
            console.log('[columnSlice]: ', action);
        },
    },
});


export const { createColumn } = columnSlice.actions;

export default columnSlice.reducer;