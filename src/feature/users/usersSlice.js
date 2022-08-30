import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Nguyen Van A" },
  { id: 2, name: "Nguyen Van B" },
  { id: 3, name: "Nguyen Van C" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
