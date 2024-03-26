import "bootstrap/dist/css/bootstrap.css"

export default function WorldDisplay() {

    return (

        <div className="text-white">
            <p className="fs-3 fw-bold">World weather</p>
            <table className="table table-dark table-borderless">
                <tbody>
                    <tr className="align-middle">
                        <td><p className="my-auto">O</p></td>
                        <td><p className="my-auto">15 °C</p></td>
                        <td><p className="fs-3 my-auto">Paris</p></td>
                    </tr>
                    <tr className="align-middle">
                        <td><p className="my-auto">O</p></td>
                        <td><p className="my-auto">15 °C</p></td>
                        <td><p className="fs-3 my-auto">New York</p></td>
                    </tr>
                    <tr className="align-middle">
                        <td><p className="my-auto">O</p></td>
                        <td><p className="my-auto">15 °C</p></td>
                        <td><p className="fs-3 my-auto">Tokyo</p></td>
                    </tr>
                    <tr className="align-middle">
                        <td><p className="my-auto">O</p></td>
                        <td><p className="my-auto">15 °C</p></td>
                        <td><p className="fs-3 my-auto">Madrid</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}