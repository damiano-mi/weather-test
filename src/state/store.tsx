import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { weatherAPI } from "../services/weatherAPI"
import { citiesAPI } from "../services/citiesAPI"
import cityReducer from "./city/citySlice"

export const store = configureStore({
  reducer: {
    city: cityReducer,
    [weatherAPI.reducerPath]: weatherAPI.reducer,
    [citiesAPI.reducerPath]: citiesAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherAPI.middleware).concat(citiesAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch