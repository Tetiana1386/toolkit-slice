import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        list: {
            'project-1': {
                id: 1,
                columnIds: [1, 2],
            },
        },
        order: [],
    },
    reducers: {},
    extraReducers: {
        'columns/createColumn': (state, action) => {
            console.log('[projectSlice]:', action);
        },
    },
});
export default projectSlice.reducer;
