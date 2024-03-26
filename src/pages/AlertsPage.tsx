import "bootstrap/dist/css/bootstrap.css"
import * as Icon from 'react-bootstrap-icons';
import { weatherAPI } from "../services/weatherAPI";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { unixDateHourConverter } from "../utilities/UnixConverter";
import { upperCaseFormat } from "../utilities/StringFormat";
import { Link } from "react-router-dom";

export default function AlertsPage() {

    const useGetWeatherQuery = weatherAPI.endpoints.getWeather.useQuery
    const city = useSelector((state: RootState) => state.city.city);
    const { data, isLoading } = useGetWeatherQuery({ lat: city.lat, lon: city.lon });

    return (
        <>
            <div className="row">
                <div className="card text-center text-white bg-danger bg-opacity-25 bg-gradient border-0 shadow rounded-5">
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
                                        <tr>
                                            <td><p className="fs-5 my-auto">{unixDateHourConverter(alert.start)}</p></td>
                                            <td><p className="fs-5 my-auto">{unixDateHourConverter(alert.end)}</p></td>
                                            <td><p className="fs-4 my-auto">{upperCaseFormat(alert.event)}</p></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}><p className="my-auto text-start">{alert.description}</p></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}><p className="my-auto text-start">Source: {alert.sender_name}</p></td>
                                        </tr>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="text-center mb-3">
                            <Link to="/"><button className="btn btn-outline-light fs-5">Return to Home</button></Link>
                        </div>
                    </>
                    )}
                </div>
            </div>
        </>
    );
}