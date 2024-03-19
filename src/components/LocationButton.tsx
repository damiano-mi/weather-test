import "bootstrap/dist/css/bootstrap.css"
import * as Icon from 'react-bootstrap-icons';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { citiesAPI } from "../services/citiesAPI";
import { useEffect, useState } from "react";
import { setCity } from "../state/city/citySlice";

export default function LocationButton() {

    const dispatch = useDispatch<AppDispatch>();
    const useGetCityByCoordsQuery = citiesAPI.endpoints.getCityByCoords.useQuery;
    const [currentCoords, setCurrentCoords] = useState<{lat: number,lon: number}>({lat: 51.5073219, lon: -0.1276474});
    const { data } = useGetCityByCoordsQuery(currentCoords);

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not active");
        }
    }

    function showPosition(position: any) {
        setCurrentCoords({ lat: position.coords.latitude, lon: position.coords.longitude });
    }

    useEffect(() => {
        if(data){
            dispatch(setCity(data![0]));
        }
    }, [data])

    return (
        <button className="positionButton" onClick={getLocation}><Icon.PinMapFill size={20}/></button>
        
    );
}