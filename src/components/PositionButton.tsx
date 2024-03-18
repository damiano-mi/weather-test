import "bootstrap/dist/css/bootstrap.css"
import * as Icon from 'react-bootstrap-icons';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { citiesAPI } from "../services/citiesAPI";
import { useState } from "react";
import { setCity } from "../state/city/citySlice";

export default function PositionButton() {

    const dispatch = useDispatch<AppDispatch>();
    const useGetCityByCoordsQuery = citiesAPI.endpoints.getCityByCoords.useQuery;
    const [currentCoords, setCurrentCoords] = useState<{lat: number,lon: number}>({lat: 49, lon: 10});
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
        dispatch(setCity(data![0]));
    }

    return (
        <button className="positionButton" onClick={getLocation}><Icon.PinMapFill size={20}/></button>
        
    );
}