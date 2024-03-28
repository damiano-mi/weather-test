import { unixDateConverter, unixAllInfoConverter, unixWeekNameConverter } from "../../utilities/UnixConverter";
import TemperatureScaleSelector from "../buttons/TemperatureScaleSelector";
import { setWeather } from "../../state/weather/weatherSlice";
import { hourlyExists } from "../../utilities/HourlyExists";
import { AppDispatch, RootState } from "../../state/store";
import HourlyWeatherLayout from "./hourlyList/HourlyWeatherLayout";
import { weatherAPI } from "../../services/weatherAPI";
import { useDispatch, useSelector } from "react-redux";
import LocationButton from "../buttons/LocationButton";
import HourlyRoughData from "./hourlyList/HourlyRoughData";
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from "react";
import MainWeatherData from "./MainWeatherData";
import "bootstrap/dist/css/bootstrap.css"

export default function MainWeatherLayout() {

    const useGetWeatherQuery = weatherAPI.endpoints.getWeather.useQuery
    const city = useSelector((state: RootState) => state.city.city);
    const { data, isLoading } = useGetWeatherQuery({ lat: city.lat, lon: city.lon });
    const selectedDay = useSelector((state: RootState) => state.weather.day);
    const [toggleTable, setToggleTable] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setWeather(data!));
    }, [data, dispatch]);

    return (
        <>
            {isLoading && <div className="spinner-border text-white"><div className="visually-hidden">Loading</div></div>}
            {data &&
                <div className="card text-center text-white bg-dark bg-opacity-25 bg-gradient border-0 shadow rounded-5" id="mainDisplay">

                    <div className="card-title mt-2">
                        <div className="row">

                            <div className="col-md-auto">
                                <TemperatureScaleSelector />
                            </div>

                            <div className="col mt-1">
                                <div className="row">
                                    <p className="fs-2 fw-bold mb-auto">
                                        <Icon.GeoAltFill size={25} className="me-2 mb-2" />
                                        {city.name}
                                        {city.state ? " (" + city.state + "), " : ", "}
                                        {city.country}
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="fs-3 mb-auto">
                                        {
                                            unixDateConverter(selectedDay) === unixDateConverter(data.current.dt) ?
                                                "Now" : unixWeekNameConverter(selectedDay)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <LocationButton />
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {unixDateConverter(selectedDay) === unixDateConverter(data.current.dt) ?
                            <MainWeatherData weather={data.current} />
                            :
                            <MainWeatherData weather={data.daily.filter((day) => day.dt === selectedDay)[0]} />
                        }
                    </div>
                    {toggleTable && (
                        hourlyExists(data.hourly, selectedDay) ?
                            <HourlyWeatherLayout hourly={data.hourly} selectedDay={selectedDay} />
                            :
                            <HourlyRoughData day={data.daily.filter((day) => day.dt === selectedDay)[0]} />
                    )
                    }

                    <div className="mb-2">
                        <div className="btn" onClick={() => setToggleTable(t => !t)}>

                            <div className="col">
                                <div className="row">
                                    <div className="mb-auto text-white">
                                        {!toggleTable ?
                                            <div>
                                                <Icon.PlusCircle color="white" size={20} className="me-2" />
                                                Show hourly weather
                                            </div>
                                            :
                                            <div>
                                                <Icon.DashCircle color="white" size={20} className="me-2" />
                                                Hide hourly weather
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-transparent">
                        <p className="fs-5 my-auto">{
                            unixDateConverter(selectedDay) === unixDateConverter(data.current.dt) ?
                                unixAllInfoConverter(data.current.dt) : unixDateConverter(selectedDay)
                        }</p>
                    </div>
                </div>

            }
        </>
    );
}