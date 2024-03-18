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
    date: number
}

const HourlyTable: React.FC<HourlyTableProps> = (props: HourlyTableProps) => {

    const selectedTemp = useSelector((state: RootState) => state.temp.temp);
    const [toggleTable,setToggleTable] = useState<boolean>(false);
    
    function handleTable(){
        if(toggleTable) setToggleTable(false);
        else setToggleTable(true);
    }

    return (
        <>
            <div className="text-end mb-2">
                <button className="btn" onClick={handleTable}>
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
                            <th><Icon.Thermometer size={26} /></th>
                            <th><Icon.CloudRainFill size={26} /></th>
                            <th><Icon.Sunset size={26} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.hourly.filter(hour => unixDateConverter(hour.dt) === unixDateConverter(props.date))
                            .map((hour) => {
                                return (
                                    <tr className="align-middle" key={hour.dt}>
                                        <td className="fs-1">{unixHourConverter(hour.dt)}</td>
                                        <td className="fs-5">{tempCalculator(hour.temp, selectedTemp)}</td>
                                        <td className="fs-5">{hour.pop} %</td>
                                        <td className="fs-5">{hour.uvi}</td>
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