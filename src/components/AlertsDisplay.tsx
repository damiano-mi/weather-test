import "bootstrap/dist/css/bootstrap.css"
import * as Icon from 'react-bootstrap-icons';
import { weatherAPI } from "../services/weatherAPI";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { unixDateHourConverter } from "../utilities/UnixConverter";
import { upperCaseFormat } from "../utilities/StringFormat";

export default function AlertsDisplay() {

    const useGetWeatherQuery = weatherAPI.endpoints.getWeather.useQuery
    const city = useSelector((state: RootState) => state.city.city);
    const { data, isLoading } = useGetWeatherQuery({ lat: city.lat, lon: city.lon });

    return (
        <div className="card text-center text-white bg-white bg-opacity-50 bg-gradient border-0 shadow rounded-4 ms-2 mb-4" style={{ height: "450px" }}>
            {data && data.alerts && (<><p className="fs-3 mt-2 fw-bold">Alerts in {city.name}</p>
                <table className="table table-dark border-light">
                    <thead>
                        <tr>
                            <th><Icon.Clock color={"white"} size={20} /></th>
                            <th><Icon.ClockFill color={"white"} size={20} /></th>
                            <th><Icon.ExclamationTriangleFill color={"white"} size={20} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.alerts.map((alert, id) => (
                            <tr className="align-middle" key={id}>
                                <td><p className="fs-5 my-auto">{unixDateHourConverter(alert.start)}</p></td>
                                <td><p className="fs-5 my-auto">{unixDateHourConverter(alert.end)}</p></td>
                                <td><p className="fs-4 my-auto">{upperCaseFormat(alert.event)}</p></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-center mb-3">
                    <button className="btn btn-outline-light fs-5">More info</button>
                </div>
            </>
            )}
            {data && !data.alerts && <p className="my-auto fs-2 fw-bold">No alerts found</p>}
        </div>
    );
}