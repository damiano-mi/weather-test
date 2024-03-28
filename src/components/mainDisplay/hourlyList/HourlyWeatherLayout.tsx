import "bootstrap/dist/css/bootstrap.css"
import { HourlyWeather } from "../../../types/types";
import { unixDateConverter, unixHourConverter } from "../../../utilities/UnixConverter";
import ParameterSelector from "../../buttons/WeatherConditionSelector";
import HourlyPreciseData from "./HourlyPreciseData";

type HourlyWeatherLayoutProps = {
    hourly: HourlyWeather[],
    selectedDay: number
}

const HourlyWeatherLayout: React.FC<HourlyWeatherLayoutProps> = (props: HourlyWeatherLayoutProps) => {

    return (
        <>
            <>
                <ParameterSelector shortView={false} />
                <div className="card-group card-group-scroll mb-2" id="hourly">
                    {props.hourly
                        .filter(hour => unixDateConverter(hour.dt) === unixDateConverter(props.selectedDay))
                        .map((hour) => {
                            return (
                                <div id="hourCard" key={hour.dt} className="card text-white text-center bg-transparent shadow ms-2 me-2 mb-3 mt-1">
                                    <p className="my-auto fs-3">{unixHourConverter(hour.dt) + ":00"}</p>
                                    <HourlyPreciseData hour={hour} />
                                </div>
                            )
                        })
                    }
                </div>
            </>
        </>
    );
}

export default HourlyWeatherLayout;