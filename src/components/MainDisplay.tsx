import "bootstrap/dist/css/bootstrap.css"
import * as Icon from 'react-bootstrap-icons';
import { weatherAPI } from "../services/weatherAPI";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import TemperatureButton from "./TemperatureButton";
import LocationButton from "./LocationButton";
import HourlyTable from "./HourlyLayout";
import { hourlyExists } from "../utilities/HourlyExists";
import { unixDateConverter, unixAllInfoConverter } from "../utilities/UnixConverter";
import { setWeather } from "../state/weather/weatherSlice";
import DailyLayout from "./DailyLayout";
import { useEffect, useState } from "react";
import MainWeather from "./MainWeather";

export default function MainDisplay() {

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
                                <TemperatureButton />
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
                                    <div className="fs-3 mb-auto">Now</div>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <LocationButton />
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {unixDateConverter(selectedDay) === unixDateConverter(data.current.dt) ?
                            <MainWeather weather={data.current} />
                            :
                            <MainWeather weather={data.daily.filter((day) => day.dt === selectedDay)[0]} />
                        }
                    </div>
                    {toggleTable && (
                        hourlyExists(data.hourly, selectedDay) ?
                            <HourlyTable hourly={data.hourly} selectedDay={selectedDay} />
                            :
                            <DailyLayout day={data.daily.filter((day) => day.dt === selectedDay)[0]} />
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
                        <p>{unixAllInfoConverter(selectedDay)}</p>
                    </div>
                </div>

            }
        </>
    );
}