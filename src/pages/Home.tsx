import "bootstrap/dist/css/bootstrap.css"
import MainWeatherLayout from "../components/mainDisplay/MainWeatherLayout";
import ForecastList from "../components/forecast/ForecastList";
import AlertsDisplay from "../components/alerts/AlertsDisplay";
import WorldDisplay from "../components/WorldDisplay";

export default function Home() {

    return (
        <>
            <div className="col">
                <div className="row">
                    <MainWeatherLayout />
                </div>
                <div className="row mt-4">
                    <ForecastList />
                </div>
                <div className="row mt-4">
                    <AlertsDisplay />
                </div>
                <div className="row mt-4">
                    <WorldDisplay />
                </div>
            </div>
        </>
    );
}