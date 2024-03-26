import "bootstrap/dist/css/bootstrap.css"
import * as Icon from 'react-bootstrap-icons';
import { tempCalculator } from "../utilities/TempCalculator";
import { upperCaseFormat } from "../utilities/StringFormat";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { CurrentWeather, DailyWeather } from "../types/types";

type MainWeatherProps = {
    weather: CurrentWeather | DailyWeather
}

const MainWeather: React.FC<MainWeatherProps> = (props: MainWeatherProps) => {

    const selectedTemp = useSelector((state: RootState) => state.temperature.temperature);

    return (
        <>
            <div className="row">
                <div className="col d-flex flex-column justify-content-md-center">
                    <div className="row align-items-center">
                        <div className="col-md-3"><Icon.ThermometerHalf size={62} /></div>
                        {
                            typeof props.weather.temp === 'number' && typeof props.weather.feels_like === 'number' ? (
                                <div className="col fs-1">{tempCalculator(props.weather.temp, selectedTemp)}
                                    <p className="fs-5">{tempCalculator(props.weather.feels_like, selectedTemp)}</p>
                                </div>) :
                                typeof props.weather.temp !== 'number' && typeof props.weather.feels_like !== 'number' && (
                                    <div className="col fs-1">{tempCalculator(props.weather.temp.day, selectedTemp)}
                                        <p className="fs-5">{tempCalculator(props.weather.feels_like.day, selectedTemp)}</p>
                                    </div>)
                        }
                    </div>
                </div>
                <div className="col d-flex flex-column justify-content-md-center">
                    <div className="row"><img src={"https://openweathermap.org/img/wn/" + props.weather.weather[0].icon + "@4x.png"} alt="weather-icon" /></div>
                </div>
                <div className="col d-flex flex-column justify-content-md-center">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-end"><Icon.Wind size={30} /></div>
                        <div className="col fs-3 text-start">{props.weather.wind_speed + " m/s"}</div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4 text-end"><Icon.DropletHalf size={30} /></div>
                        <div className="col fs-3 text-start">{props.weather.humidity + "%"}</div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4 text-end"><Icon.CloudsFill size={30} /></div>
                        <div className="col fs-3 text-start">{props.weather.clouds + "%"}</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <p className="fs-3 fw-bold my-auto">{upperCaseFormat(props.weather.weather[0].description)}</p>
            </div>
        </>
    );
}

export default MainWeather;