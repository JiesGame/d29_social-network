import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {value: {username:'', email:'', description:'', id:''}},
  reducers: {
    changeProfile: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeProfile } = userSlice.actions;


export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  }
})
