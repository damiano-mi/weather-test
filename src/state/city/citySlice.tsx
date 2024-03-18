import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { City } from "../../types/types";

interface CityState {
    city: City
}

const initialState: CityState = {
    city: {
        name: "London",
        local_names: {},
        lat: 51.5073219,
        lon: -0.1276474,
        country: "GB",
        state: "England"
    }
}

const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        setCity: (state, action: PayloadAction<City>) => {
            state.city = action.payload;
        }
    }
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;