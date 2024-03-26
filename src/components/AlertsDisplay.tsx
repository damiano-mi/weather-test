import "bootstrap/dist/css/bootstrap.css"
import * as Icon from 'react-bootstrap-icons';
import { weatherAPI } from "../services/weatherAPI";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { unixDateHourConverter } from "../utilities/UnixConverter";
import { upperCaseFormat } from "../utilities/StringFormat";
import { Link } from "react-router-dom";

export default function AlertsDisplay() {

    const useGetWeatherQuery = weatherAPI.endpoints.getWeather.useQuery
    const city = useSelector((state: RootState) => state.city.city);
    const { data, isLoading } = useGetWeatherQuery({ lat: city.lat, lon: city.lon });

    return (
        <div className="card text-white bg-danger bg-opacity-25 bg-gradient border-0 shadow rounded-5">
            <div className="row mt-1">
                <div className="col"><p className="fs-3 ms-2 fw-bold my-auto"><Icon.ExclamationTriangleFill size={22} className="mb-1"/> Alerts in {city.name}</p></div>
            </div>
            {data && data.alerts && (
                <div className="row">
                    <div className="col mx-auto ms-2">
                        <p className="fs-5"><Icon.ClockFill className="mb-1 me-1"/> {unixDateHourConverter(data.alerts[0].start)} <Icon.ArrowRight className="mb-1"/> {unixDateHourConverter(data.alerts[0].end)}</p>
                    </div>
                    <div className="col">
                        <p className="fs-5">{upperCaseFormat(data.alerts[0].event)}</p>
                    </div>
                </div>
            )}
            {data && !data.alerts && (
                <div className="row">
                    <div className="col">
                        <p className="fs-5 ms-2">No national weather alerts found</p>
                    </div>
                </div>
            )}
            <div className="row">
                <div className="col text-center mb-3">
                    <Link to="/alerts" className={data && !data.alerts ? "pe-none" : ""}><button className="btn btn-secondary" disabled={data && !data.alerts}>See all alerts</button></Link>
                </div>
            </div>
        </div>
    );
}