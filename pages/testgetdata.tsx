import React, { ReactElement } from 'react'
import axios from 'axios';
interface Props {

}

axios.post('http://localhost:5001/testgetdata', {
    number:10,
}).then(response => {
       console.log("response", response);
    });

export default function Testgetdata({ }: Props): ReactElement {

    return (
        <div>

        </div>
    )
}


