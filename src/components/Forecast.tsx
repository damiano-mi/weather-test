import "bootstrap/dist/css/bootstrap.css"
import { weatherAPI } from "../services/weatherAPI";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { unixDayMonthConverter } from "../utilities/UnixConverter";
import { tempCalculator } from "../utilities/TempCalculator";

export default function Forecast() {

    const useGetWeatherQuery = weatherAPI.endpoints.getWeather.useQuery
    const city = useSelector((state: RootState) => state.city.city);
    const selectedTemp = useSelector((state: RootState) => state.temp.temp);
    const { data, isLoading } = useGetWeatherQuery({ lat: city.lat, lon: city.lon });

    return (
        <div className="card-group card-group-scroll">
            {data?.daily.map((day) => {
                return (
                    <div className="card text-center text-white bg-white bg-opacity-25 bg-gradient border-0 shadow rounded-5 ms-2 me-2 mb-3">
                        <div className="col">
                            <div className="row">
                                <p className="fw-bold fs-3 text-center m-auto">{unixDayMonthConverter(day.dt)}</p>
                            </div>
                            <div className="row">
                                <img className="w-50 mx-auto" src={"https://openweathermap.org/img/wn/" + day.weather[0].icon + "@4x.png"} alt="weather-icon" />
                            </div>
                            <div className="row">
                                <p className="fs-5 text-center m-auto mb-2">{tempCalculator(day.temp.day, selectedTemp)}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}