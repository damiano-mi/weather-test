import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TemperatureState {
    temperature: "C" | "K" | "F";
}

const initialState: TemperatureState = {
    temperature: "C"
}

const temperatureSlice = createSlice({
    name: "temperature",
    initialState,
    reducers: {
        setTemperature: (state, action: PayloadAction<"C" | "K" | "F">) => {
            state.temperature = action.payload;
        }
    }
});

export const { setTemperature } = temperatureSlice.actions;
export default temperatureSlice.reducer;