import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { City } from "../../types/types";

interface CityState {
    city: City
}

const initialState: CityState = {
    city: {
        name: "Rome",
        local_names: {},
        lat: 41.8933203,
        lon: 12.4829321,
        country: "IT",
        state: "Lazio"
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