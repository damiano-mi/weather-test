import "bootstrap/dist/css/bootstrap.css"
import MainDisplay from "../components/MainDisplay";
import Navbar from "../components/Navbar";
import Forecast from "../components/ForecastList";
import AlertsDisplay from "../components/AlertsDisplay";
import WorldDisplay from "../components/WorldDisplay";

export default function Home() {

    return (
        <>
            <div className="container-fluid" style={{ width: 800 }}>
                <div className="col">
                    <div className="row">
                        <Navbar />
                    </div>
                    <div className="row">
                        <MainDisplay />
                    </div>
                    <div className="row mt-3">
                        <Forecast />
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <AlertsDisplay />
                        </div>
                        <div className="col-lg-5">
                            <WorldDisplay />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}