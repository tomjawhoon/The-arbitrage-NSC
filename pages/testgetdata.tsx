import React, { ReactElement } from 'react'
import axios from 'axios';
interface Props {

}

axios
    .post('http://localhost:1337/restaurants', {
        name: 'Dolemon Sushi',
        description: 'Unmissable Japanese Sushi restaurant. The cheese and salmon makis are delicious',
        categories: [3],
    })
    .then(response => {
        console.log(response);
    });


export default function Testgetdata({ }: Props): ReactElement {

    return (
        <div>

        </div>
    )
}


