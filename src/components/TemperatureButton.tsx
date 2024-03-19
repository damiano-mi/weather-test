import "bootstrap/dist/css/bootstrap.css"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { setTemperature } from "../state/temperature/temperatureSlice";

export default function TemperatureButton() {

    const dispatch = useDispatch<AppDispatch>();
    
    return (
        <select className="tempSelector" onChange={(e) => dispatch(setTemperature(e.target.value as "C" | "F" | "K"))}>
            <option value="C">°C</option>
            <option value="F">°F</option>
            <option value="K">K</option>
        </select>
        
    );
}