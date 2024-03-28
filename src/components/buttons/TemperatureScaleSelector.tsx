import "bootstrap/dist/css/bootstrap.css"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";
import { TemperatureScale, setTemperature } from "../../state/temperature/temperatureSlice";
import "../../assets/styles/buttons.css"

export default function TemperatureScaleSelector() {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <select className="tempSelector" onChange={(e) => dispatch(setTemperature(e.target.value as TemperatureScale))}>
            <option value="C">°C</option>
            <option value="F">°F</option>
            <option value="K">K</option>
        </select>

    );
}