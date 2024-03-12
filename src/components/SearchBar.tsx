import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react";
import { citiesAPI } from "../services/citiesAPI";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { setCity } from "../state/city/citySlice";
export default function SearchBar() {

    const useGetCityQuery = citiesAPI.endpoints.getCity.useQuery;
    const [insertedCity, setInsertedCity] = useState<string>("Rome");
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useGetCityQuery(insertedCity);

    function searchCity(e: any) {
        e.preventDefault();
        dispatch(setCity(data![0]));
    }

    function handleCity(e: any) {
        setInsertedCity(e.target.value);
    }

    return (
        <form className="form-inline" onSubmit={(e) => searchCity(e)}>
            <div className="row">
                <div className="col-md-auto">
                    <input
                        className="form-control rounded-5"
                        type="text"
                        id="insertedCity"
                        name="insertedCity"
                        value={insertedCity}
                        onChange={handleCity}
                        placeholder="Search a city"
                        aria-label="Search"
                    />
                </div>
                <div className="col col-lg-2">
                    <button className="btn btn-secondary rounded-5" type="submit">Q</button>
                </div>
            </div>
        </form>
    );
}