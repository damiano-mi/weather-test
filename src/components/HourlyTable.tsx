import "bootstrap/dist/css/bootstrap.css"
import * as Icon from 'react-bootstrap-icons';
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { tempCalculator } from "../utilities/TempCalculator";
import { HourlyWeather } from "../types/types";
import { unixDateConverter, unixHourConverter } from "../utilities/UnixConverter";
import { useState } from "react";

type HourlyTableProps = {
    hourly: HourlyWeather[],
    selectedDay: number
}

const HourlyTable: React.FC<HourlyTableProps> = (props: HourlyTableProps) => {

    const selectedTemp = useSelector((state: RootState) => state.temperature.temperature);
    const [toggleTable, setToggleTable] = useState<boolean>(true);

    return (
        <>
            <div className="text-end mb-2">
                <button className="btn" onClick={() => setToggleTable(true)}>
                    {   !toggleTable ?
                        <Icon.ArrowDown color="white" size={25} />
                        :
                        <Icon.ArrowUp color="white" size={25}/>
                    }
                </button>
            </div>
            { toggleTable && 
            <div>
                <table className="table table-dark border-light">
                    <thead>
                        <tr>
                            <th><Icon.ClockFill size={26} /></th>
                            <th><Icon.CloudSun size={26} /></th>
                            <th><Icon.Thermometer size={26} /></th>
                            <th><Icon.CloudRainFill size={26} /></th>
                            <th>UV</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.hourly.filter(hour => unixDateConverter(hour.dt) === unixDateConverter(props.selectedDay))
                            .map((hour) => {
                                return (
                                    <tr className="align-middle" key={hour.dt}>
                                        <td><p className="my-auto fs-2">{unixHourConverter(hour.dt)}</p></td>
                                        <td><img className="" src={"https://openweathermap.org/img/wn/" + hour.weather[0].icon + ".png"} alt="weather-icon" /></td>
                                        <td><p className="my-auto fs-4">{tempCalculator(hour.temp, selectedTemp)}</p></td>
                                        <td><p className="my-auto fs-4">{hour.pop} %</p></td>
                                        <td><p className="my-auto fs-4">{hour.uvi}</p></td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
            }
        </>
    );
}

export default HourlyTable;