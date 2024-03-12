import "bootstrap/dist/css/bootstrap.css"
export default function Forecast() {

    //const useGetWeatherQuery = weatherAPI.endpoints.getWeather.useQuery
    //const { data, isLoading } = useGetWeatherQuery({56, 4});
    return(<></>);
    /*
    return (
        <>
            {isLoading && <div className="spinner-border shadow"><span className="visually-hidden">Loading</span></div>}
            <div>
                {data && data!.lat+" | "+data!.lon}
                {!isLoading && data &&
                    data.daily.map((t) => (
                        <>
                            <div key={t.dt}>
                                {unixConverter(t.dt) + ": " + t.summary}
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    );
    */
}