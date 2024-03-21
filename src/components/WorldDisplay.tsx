import "bootstrap/dist/css/bootstrap.css"

export default function WorldDisplay() {

    return (

        <div className="card text-center text-white bg-black bg-opacity-50 bg-gradient border-0 shadow rounded-4 me-1 mb-3">
            <p>World Weather</p>
            <table>
                <tbody>
                    <tr>
                        <td>London</td>
                    </tr>
                    <tr>
                        <td>Paris</td>
                    </tr>
                    <tr>
                        <td>Berlin</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}