import "bootstrap/dist/css/bootstrap.css"
import { setParameter } from "../state/weather/weatherSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";

type ParameterSelectorProps = {
    shortView: boolean;
}

const ParameterSelector: React.FC<ParameterSelectorProps> = (props: ParameterSelectorProps) => {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <div className="btn-group mb-3" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={() => dispatch(setParameter("temperature"))} defaultChecked={props.shortView}/>
                <label className="btn btn-outline-light" htmlFor="btnradio1">Temperature</label>
                {!props.shortView ?
                    (<>
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={() => dispatch(setParameter("rainfall"))} />
                    <label className="btn btn-outline-light" htmlFor="btnradio2">Rainfall</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={() => dispatch(setParameter("wind"))} />
                    <label className="btn btn-outline-light" htmlFor="btnradio3">Wind</label>
                    </>)
                    :
                    ""
                }
            </div>
        </div>
    );
}

export default ParameterSelector;