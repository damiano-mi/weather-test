import "bootstrap/dist/css/bootstrap.css"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { setTemp } from "../state/temperature/tempSlice";

export default function TempButton() {

    const dispatch = useDispatch<AppDispatch>();
    
    return (
        <select className="tempSelector" onChange={(e) => dispatch(setTemp(e.target.value))}>
            <option value="C">°C</option>
            <option value="F">°F</option>
            <option value="K">K</option>
        </select>
        
    );
}