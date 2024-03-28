import "bootstrap/dist/css/bootstrap.css"
import ParameterSelector from "../../buttons/WeatherConditionSelector";
import { DailyWeather } from "../../../types/types";
import { tempCalculator } from "../../../utilities/TempCalculator";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

type HourlyRoughDataProps = {
    day: DailyWeather
}

const HourlyRoughData: React.FC<HourlyRoughDataProps> = (props: HourlyRoughDataProps) => {

    const selectedTemp = useSelector((state: RootState) => state.temperature.temperature);

    return (
        <>
            <ParameterSelector shortView={true}/>
            <div className="card-group card-group-scroll" id="hourly">
                <div id="hourCard" className="card text-white text-center bg-transparent shadow ms-2 me-2 mb-3 mt-1">
                    <p className="my-auto fs-3">6:00</p>
                    <img className="" src={"https://openweathermap.org/img/wn/" + props.day.weather[0].icon + "@4x.png"} alt="weather-icon" />
                    <p className="my-auto fs-2">{tempCalculator(props.day.temp.morn, selectedTemp)}</p>
                </div>
                <div id="hourCard" className="card text-white text-center bg-transparent shadow ms-2 me-2 mb-3 mt-1">
                    <p className="my-auto fs-3">12:00</p>
                    <img className="" src={"https://openweathermap.org/img/wn/" + props.day.weather[0].icon + "@4x.png"} alt="weather-icon" />
                    <p className="my-auto fs-2">{tempCalculator(props.day.temp.day, selectedTemp)}</p>
                </div>
                <div id="hourCard" className="card text-white text-center bg-transparent shadow ms-2 me-2 mb-3 mt-1">
                    <p className="my-auto fs-3">18:00</p>
                    <img className="" src={"https://openweathermap.org/img/wn/" + props.day.weather[0].icon + "@4x.png"} alt="weather-icon" />
                    <p className="my-auto fs-2">{tempCalculator(props.day.temp.eve, selectedTemp)}</p>
                </div>
                <div id="hourCard" className="card text-white text-center bg-transparent shadow ms-2 me-2 mb-3 mt-1">
                    <p className="my-auto fs-3">21:00</p>
                    <img className="" src={"https://openweathermap.org/img/wn/" + props.day.weather[0].icon.slice(0, -1) + "n@4x.png"} alt="weather-icon" />
                    <p className="my-auto fs-2">{tempCalculator(props.day.temp.night, selectedTemp)}</p>
                </div>
            </div>

        </>
    );
}

export default HourlyRoughData;