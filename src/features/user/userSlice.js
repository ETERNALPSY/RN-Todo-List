import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name: 'User',
   initialState: {
      value: {
         profileImage: '',
      }
   },
   reducers: {
      saveImage: (state, action) => {
         state.value.profileImage = action.payload
      },
   }
})

export const { saveImage } = userSlice.actions
export default userSlice.reducer