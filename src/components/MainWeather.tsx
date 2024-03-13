import "bootstrap/dist/css/bootstrap.css"
import * as Icon from 'react-bootstrap-icons';
import { weatherAPI } from "../services/weatherAPI";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { tempCalculator } from "../utilities/TempCalculator";
import TempButton from "./TempButton";

export default function TodayWeather() {

    const useGetWeatherQuery = weatherAPI.endpoints.getWeather.useQuery
    const city = useSelector((state: RootState) => state.city.city);
    const selectedTemp = useSelector((state: RootState) => state.temp.temp);
    const { data, isLoading } = useGetWeatherQuery({ lat: city.lat, lon: city.lon });

    return (
        <>
            {isLoading && <div className="spinner-border text-white"><div className="visually-hidden">Loading</div></div>}
            {data &&
                <div className="card text-center text-white bg-dark bg-opacity-25 bg-gradient border-0 shadow rounded-5">
                    <TempButton />
                    <div className="card-title fs-1 fw-bold">Today</div>
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
                    <div className="card-footer bg-transparent">
                        <div className="row">
                            <div className="col fs-3 fw-bold">
                                <Icon.GeoAltFill size={25} className="me-2 mb-2" />
                                {city.name}
                                {city.state ? " (" + city.state + "), " : ", "}
                                {city.country}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}