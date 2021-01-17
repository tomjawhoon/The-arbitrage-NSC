import React, { ReactElement, useState } from 'react'
import axios from 'axios';
interface Props {
    initialId: any,
    onSave: any,
    valueinput: any,
}

const onSave = (valueinput) => { //arrow function
    console.log("valueinput", valueinput)
    axios.post('http://localhost:5001/testgetdata', {
        name: 'EIEIEI',
        number: 10,
        valueinput,
    }).then(response => {
        console.log("response", response.data); //1000.000
    });
}

export default function Testgetdata({ initialId, onSave }: Props): ReactElement {
    const [newId, setNewId] = useState(initialId)
    console.log("newId", newId)
    return (
        <div>
            <li>
                <input type="text" placeholder="Enter new ID" onChange={(e) => setNewId(e.target.value)} />
                <button onClick={() => onSave(newId)}>Save</button>
            </li>
        </div>
    )
}
