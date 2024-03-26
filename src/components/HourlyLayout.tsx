import "bootstrap/dist/css/bootstrap.css"
import { HourlyWeather } from "../types/types";
import { unixDateConverter, unixHourConverter } from "../utilities/UnixConverter";
import ParameterSelector from "./ParameterSelector";
import HourlyTable from "./HourlyTable";

type HourlyLayoutProps = {
    hourly: HourlyWeather[],
    selectedDay: number
}

const HourlyLayout: React.FC<HourlyLayoutProps> = (props: HourlyLayoutProps) => {

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
                                    <HourlyTable hour={hour} />
                                </div>
                            )
                        })
                    }
                </div>
            </>
        </>
    );
}

export default HourlyLayout;