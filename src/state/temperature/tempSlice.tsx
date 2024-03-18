import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TempState {
    temp: string
}

const initialState: TempState = {
    temp: "C"
}

const tempSlice = createSlice({
    name: "temp",
    initialState,
    reducers: {
        setTemp: (state, action: PayloadAction<string>) => {
            state.temp = action.payload;
        }
    }
});

export const { setTemp } = tempSlice.actions;
export default tempSlice.reducer;