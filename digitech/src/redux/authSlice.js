// import { createSlice } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';

// const initialState = {
//   token: localStorage.getItem('token') || null,
//   uid: localStorage.getItem('uid') ? JSON.parse(localStorage.getItem('uid')) : null,
// };

// export const selectuid = (state) => state?.auth?.uid

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.token = action.payload.token;
//       state.uid = action.payload.uid;
//       localStorage.setItem('token', action.payload.token);
//       localStorage.setItem('uid', JSON.stringify(action.payload.uid));
//     },
//     logout: (state) => {
//       state.token = null;
//       state.uid = null;
//       localStorage.removeItem('token');
//       localStorage.removeItem('uid');
//     },
//   },
// });

// export const { loginSuccess, logout } = authSlice.actions;
// export default authSlice.reducer;





import { createSlice } from '@reduxjs/toolkit';

// Initial state with safe JSON parsing
const initialState = {
  token: localStorage.getItem('token') || null,
  uid: localStorage.getItem('uid') ? JSON.parse(localStorage.getItem('uid')) : null,
};

// Selector function to safely access uid
export const selectuid = (state) => state?.auth?.uid || null;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.uid = action.payload.uid;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('uid', JSON.stringify(action.payload.uid));
    },
    logout: (state) => {
      state.token = null;
      state.uid = null;
      localStorage.removeItem('token');
      localStorage.removeItem('uid');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;