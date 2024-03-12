import "bootstrap/dist/css/bootstrap.css"
import MainWeather from "../components/MainWeather";
import Navbar from "../components/Navbar";

export default function Home() {

    return (
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="d-flex justify-content-center align-items-center" style={{ width: 700 }}>
                <div className="col">
                    <div className="row">
                        <Navbar />
                    </div>
                    <div className="row">
                        <MainWeather />
                    </div>
                </div>
            </div>
        </div>
    );
}