import "bootstrap/dist/css/bootstrap.css"
import { HourlyWeather } from "../../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { tempCalculator } from "../../../utilities/TempCalculator";

type HourlyPreciseDataProps = {
    hour: HourlyWeather
}

const HourlyPreciseDataTable: React.FC<HourlyPreciseDataProps> = (props: HourlyPreciseDataProps) => {

    const selectedParameter = useSelector((state: RootState) => state.weather.selectedParameter);
    const selectedTemp = useSelector((state: RootState) => state.temperature.temperature);

    switch (selectedParameter) {
        case "temperature":
            return (
                <>
                    <img className="" src={"https://openweathermap.org/img/wn/" + props.hour.weather[0].icon + "@4x.png"} alt="weather-icon" />
                    <p className="my-auto fs-2">{tempCalculator(props.hour.temp, selectedTemp)}</p>
                </>
            );
        case "wind":
            return (
                <>
                    <img className="opacity-0" src={"https://openweathermap.org/img/wn/" + props.hour.weather[0].icon + "@4x.png"} alt="weather-icon" />
                    <p className="my-auto fs-2">{props.hour.wind_speed + " m/s"}</p>
                </>
            );
        case "rainfall":
            return (
                <>
                    <img className="opacity-0" src={"https://openweathermap.org/img/wn/" + props.hour.weather[0].icon + "@4x.png"} alt="weather-icon" />
                    <p className="my-auto fs-2">{props.hour.pop + " %"}</p>
                </>
            );
        default: return null;
    }
}

export default HourlyPreciseDataTable;
