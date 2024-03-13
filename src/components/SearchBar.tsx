import "bootstrap/dist/css/bootstrap.css"
import * as Icon from 'react-bootstrap-icons';
import { useState } from "react";
import { citiesAPI } from "../services/citiesAPI";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { setCity } from "../state/city/citySlice";
import "../assets/styles/mainStyle.css"

export default function SearchBar() {

    const useGetCityQuery = citiesAPI.endpoints.getCity.useQuery;
    const [input, setInput] = useState<string>("");
    const [displayBar, setDisplayBar] = useState<boolean>(false);
    const [displayResults, setDisplayResults] = useState<boolean>(true);
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useGetCityQuery(input);

    function searchCity(id: number) {
        dispatch(setCity(data![id]));
    }

    function handleCity(e: any) {
        setInput(e.target.value);
    }

    function handleSearchButton() {
        if (displayBar) {
            setDisplayBar(false)
            setInput("")
        }
        else {
            setDisplayBar(true)
            setInput("")
        }
    }

    return (
        <form className="form-inline" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
            <div className="row align-items-center">
                <div className="col-md-auto">
                    {displayBar &&
                        <input
                            className="searchBar"
                            type="text"
                            id="input"
                            name="input"
                            value={input}
                            onChange={handleCity}
                            placeholder="Search a city"
                            aria-label="Search"
                        />
                    }
                </div>

                <div className="col">
                    <button className="searchIcon" onClick={handleSearchButton}>
                        <Icon.Search size={25} className="my-2" />
                    </button>
                </div>
            </div>
            {displayBar && displayResults &&
                <div className="searchResults">
                    {input && data && data.map((city, id) => {
                        return <a className="dataItem" key={id} onClick={() => searchCity(id)}>
                            {city.name}
                            {city.state ? " (" + city.state + "), " : ", "}
                            {city.country}
                        </a>;
                    })}
                </div>
            }
        </form>
    );
}