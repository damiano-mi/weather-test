import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Weather } from "../types/types";

export const weatherAPI = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_WEATHER_BASE_URL }),
    endpoints: (builder) => ({
        getWeather: builder.query<Weather, {lat : number, lon : number}>({
            query: ({lat, lon}) => "onecall?lat="+lat+"&lon="+lon+"&appid="+process.env.REACT_APP_API_KEY
        }),
    }),
});
//https://api.openweathermap.org/data/3.0/onecall?lat=41.89193&lon=12.51133&appid=0b946d3bb10834a2a8282267ea306607
export const {
    useGetWeatherQuery
} = weatherAPI