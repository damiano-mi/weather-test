import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { City } from "../types/types";

export const citiesAPI = createApi({
    
    reducerPath: 'citiesAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CITIES_BASE_URL }),
    endpoints: (builder) => ({
        getCity: builder.query<City[], string>({
            query: (city) => "direct?q=" + city + "&limit=30&appid=" + process.env.REACT_APP_API_KEY

        }),
        getCityByCoords: builder.query<City[], {lat: number, lon: number}>({
            query: ({lat, lon}) => "reverse?lat=" + lat + "&lon=" + lon + "&limit=5&appid=" + process.env.REACT_APP_API_KEY
            
        })
    }),

});
//console.log(process.env.REACT_APP_CITIES_BASE_URL+"/reverse?lat=" + 45.4440368 + "&lon=" + 9.1567976 + "&limit=30&appid=" + process.env.REACT_APP_API_KEY);
//console.log(process.env.REACT_APP_CITIES_BASE_URL+"direct?q="+"Rome"+"&limit=1&appid="+process.env.REACT_APP_API_KEY)
export const {
    useGetCityQuery,
    useGetCityByCoordsQuery
} = citiesAPI