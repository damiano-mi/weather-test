import "bootstrap/dist/css/bootstrap.css"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { setTemp } from "../state/city/tempSlice";

export default function Forecast() {

    const dispatch = useDispatch<AppDispatch>();
    
    return (
        <div>
            <button onClick={() => dispatch(setTemp("C"))}>°C</button>
            <button onClick={() => dispatch(setTemp("F"))}>°F</button>
            <button onClick={() => dispatch(setTemp("K"))}>K</button>
        </div>
    );
}