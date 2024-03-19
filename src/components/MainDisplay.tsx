import "bootstrap/dist/css/bootstrap.css"
import * as Icon from 'react-bootstrap-icons';
import { weatherAPI } from "../services/weatherAPI";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { tempCalculator } from "../utilities/TempCalculator";
import TemperatureButton from "./TemperatureButton";
import LocationButton from "./LocationButton";
import HourlyTable from "./HourlyTable";
import { hourlyExists } from "../utilities/HourlyExists";
import { unixDateHourConverter } from "../utilities/UnixConverter";
import { setWeather } from "../state/weather/weatherSlice";
import DailyTable from "./DailyTable";

export default function MainDisplay() {

    const useGetWeatherQuery = weatherAPI.endpoints.getWeather.useQuery
    const city = useSelector((state: RootState) => state.city.city);
    const selectedTemp = useSelector((state: RootState) => state.temperature.temperature);
    const { data, isLoading } = useGetWeatherQuery({ lat: city.lat, lon: city.lon });
    const selectedDay = useSelector((state: RootState) => state.weather.day);
    const dispatch = useDispatch<AppDispatch>();
    dispatch(setWeather(data!));

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
                                    <p className="fs-3 mb-auto">Now</p>
                                </div>
                            </div>
                            <div className="col-md-auto">
                                <LocationButton />
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col d-flex flex-column justify-content-md-center">
                                <div className="row align-items-center">
                                    <div className="col-md-3"><Icon.ThermometerHalf size={62} /></div>
                                    <div className="col fs-1">{tempCalculator(data.current.temp, selectedTemp)}
                                        <p className="fs-5">{tempCalculator(data.current.feels_like, selectedTemp)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex flex-column justify-content-md-center">
                                <img src={"https://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@4x.png"} alt="weather-icon" />
                                {/*<p>{data.current.weather[0].description}</p>*/}
                            </div>
                            <div className="col d-flex flex-column justify-content-md-center">
                                <div className="row align-items-center">
                                    <div className="col-md-4 text-end"><Icon.Wind size={30} className="" /></div>
                                    <div className="col fs-3 text-start">{data.current.wind_speed + " m/s"}</div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-4 text-end"><Icon.DropletHalf size={30} /></div>
                                    <div className="col fs-3 text-start">{data.current.humidity + "%"}</div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-4 text-end"><Icon.CloudsFill size={30} /></div>
                                    <div className="col fs-3 text-start">{data.current.clouds + "%"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        hourlyExists(data.hourly, selectedDay) ?
                        <HourlyTable hourly={data.hourly} selectedDay={selectedDay} />
                        :
                        <DailyTable selectedDay={selectedDay} />
                    }
                    <div className="card-footer bg-transparent">
                        <p>{unixDateHourConverter(selectedDay)}</p>
                    </div>
                </div>
            }
        </>
    );
}