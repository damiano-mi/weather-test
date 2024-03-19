import "bootstrap/dist/css/bootstrap.css"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { unixDayMonthConverter } from "../utilities/UnixConverter";
import { tempCalculator } from "../utilities/TempCalculator";
import { setDay } from "../state/weather/weatherSlice";

export default function ForecastList() {

    const selectedTemp = useSelector((state: RootState) => state.temperature.temperature);
    const weather = useSelector((state: RootState) => state.weather.weather);
    const dispatch = useDispatch<AppDispatch>();

    function handleDay(dt: number) {
        dispatch(setDay(dt));
    }

    return (
        <div className="card-group card-group-scroll" id="forecast">
            {weather?.daily.map((day) => {
                return (
                    <a href="#navbar"
                        id="dayCard"
                        className="card text-white text-center bg-opacity-25 bg-gradient shadow rounded-5 ms-2 me-2 mb-3 mt-1"
                        onClick={() => handleDay(day.dt)}
                        key={day.dt}
                    >
                        <div className="">
                            <p className="fw-bold fs-4 my-auto">{unixDayMonthConverter(day.dt)}</p>
                            <img className="my-auto" src={"https://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png"} alt="weather-icon" />
                            <p className="fs-5 mb-2">{tempCalculator(day.temp.day, selectedTemp)}</p>
                        </div>
                    </a>
                )
            })}
        </div>
    );
}