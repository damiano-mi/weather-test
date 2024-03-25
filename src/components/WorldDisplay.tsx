import "bootstrap/dist/css/bootstrap.css"

export default function WorldDisplay() {

    return (

        <div className="card text-center text-white bg-black bg-opacity-50 bg-gradient border-0 shadow rounded-4" style={{ height: "450px" }}>
            <p className="fs-3 mt-2 fw-bold">World weather</p>
            <table className="table table-dark table-borderless">
                <tbody>
                    <tr className="align-middle">
                        <td><p className="">O</p></td>
                        <td><p className="">15 °C</p></td>
                        <td><p className="fs-3">Paris</p></td>
                    </tr>
                    <tr className="align-middle">
                        <td><p className="">O</p></td>
                        <td><p className="">15 °C</p></td>
                        <td><p className="fs-3">New York</p></td>
                    </tr>
                    <tr className="align-middle">
                        <td><p className="">O</p></td>
                        <td><p className="">15 °C</p></td>
                        <td><p className="fs-3">Tokyo</p></td>
                    </tr>
                    <tr className="align-middle">
                        <td><p className="">O</p></td>
                        <td><p className="">15 °C</p></td>
                        <td><p className="fs-3">Madrid</p></td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center">
                <button className="btn btn-outline-light fs-5">Search</button>
            </div>
        </div>
    );
}