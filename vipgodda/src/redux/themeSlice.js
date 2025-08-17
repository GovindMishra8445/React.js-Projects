import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {darkMode:true}, // The initial state is an empty array of tasks
  reducers: {
 
   darkMode: (state, action) => {
      state.darkMode = !state.darkMode;;
    },
    
  },
});

export const {darkMode } = darkModeSlice.actions; // Export actions
export default darkModeSlice.reducer; // Export reducer
