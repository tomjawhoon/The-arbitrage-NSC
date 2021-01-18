import React, { ReactElement, useState } from 'react'
import axios from 'axios';
interface Props {
    initialId: any,
    valueinput: any,

}

export default function Testgetdata({ initialId }: Props): ReactElement {

    const [newId, setNewId] = useState(initialId)
    const [newtest, settest] = useState(0)

    function onSave(valueinput: any) {
        console.log("valueinput", valueinput);
        axios.post('http://localhost:5001/testgetdata', {
            //name: 'EIEIEI',
            //number: 55,
            valueinput,
        }).then(response => {
            console.log("response", response.data); //1000.000
            settest(response.data)
        });
    }


    console.log("newtest", newtest)
    console.log("newId", newId)
    return (
        <div>
            <li>
                <input type="text" placeholder="Enter new ID" onChange={(e) => setNewId(e.target.value)} />
                <button onClick={() => onSave(newId)}>Save</button>
                <input type="text" placeholder="Enter new ID" value={newtest} />

            </li>
        </div>
    )
}
