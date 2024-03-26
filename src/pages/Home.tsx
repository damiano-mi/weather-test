import "bootstrap/dist/css/bootstrap.css"
import MainDisplay from "../components/MainDisplay";
import Navbar from "../components/Navbar";
import Forecast from "../components/ForecastList";
import AlertsDisplay from "../components/AlertsDisplay";
import WorldDisplay from "../components/WorldDisplay";

export default function Home() {

    return (
        <>
            <div className="col">
                <div className="row">
                    <MainDisplay />
                </div>
                <div className="row mt-4">
                    <Forecast />
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