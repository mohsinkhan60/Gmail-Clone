import { createSlice } from "@reduxjs/toolkit";


export const appSlice = createSlice({
   name: "appSlice",
   initialState: {
      open: false,
      emails: []
   },
   reducers: {
      setOpen: (state, action) => {
         state.open = action.payload
      },
      setEmails: (state, action) => {
         state.emails = action.payload
      }
   }
})
export const { setOpen, setEmails } = appSlice.actions
export default appSlice.reducer