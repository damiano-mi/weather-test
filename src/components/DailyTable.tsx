import "bootstrap/dist/css/bootstrap.css"
import * as Icon from 'react-bootstrap-icons';
import { useState } from "react";

type DailyTableProps = {
    selectedDay: number
}

const DailyTable: React.FC<DailyTableProps> = (props: DailyTableProps) => {

    const [toggleTable, setToggleTable] = useState<boolean>(false);

    function handleTable() {
        if (toggleTable) setToggleTable(false);
        else setToggleTable(true);
    }

    return (
        <>
            <div className="text-end mb-2">
                <button className="btn" onClick={handleTable}>
                    {!toggleTable ?
                        <Icon.ArrowDown color="white" size={25} />
                        :
                        <Icon.ArrowUp color="white" size={25} />
                    }
                </button>
            </div>
            {toggleTable &&
                <h1 className="my-3">placeholder</h1>
            }
        </>
    );
}

export default DailyTable;