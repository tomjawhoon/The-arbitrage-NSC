import Head from 'next/head'
import React, { ReactElement, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MaterialTable from 'material-table'
import { Button } from '@material-ui/core';
import axios from 'axios';

interface Props {
    result: { data: any; };
    initialId: any,
    valueinput: any,
}
export default function Totalgetcoin(props, initialId: Props): ReactElement {
    const [newId, setNewId] = useState(initialId)
    const [Price, setPrice] = useState(0)
    const [Price1, setPrice1] = useState(0)
    const [Price2, setPrice2] = useState(0)
    const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const OMG = "0xd26114cd6ee289accf82350c8d8487fedb8a0c07";
    const MKR = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
    //const USDT = "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e";
    console.log("newId", newId)
    async function onSave(valueinput: any) {
        for (; ;) {
            console.log("valueinput", valueinput);
            const response = await axios.post('http://localhost:5001/totalcoin', { //ETH
                valueinput, //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ
                fromtoken: WETH, //WETH -MKR
                totoken: MKR,
            })
            setPrice(response.data)
            console.log("FROM NODE = MKR = ", response.data);
            // console.log("from node ", response.data)
            const response2 = await axios.post('http://localhost:5001/totalcoin', {
                // valueinput: valueinput,
                valueinput: response.data.toString(),
                fromtoken: MKR, //WETH -MKR
                totoken: DAI,
            })
            setPrice1(response2.data)
            console.log("FROM NODE = DAI = ", response2.data);
            const response3 = await axios.post('http://localhost:5001/totalcoin', {
                // valueinput: valueinput,
                valueinput: response2.data.toString(),
                fromtoken: DAI, //WETH -MKR
                totoken: WETH,
            })
            setPrice2(response3.data)
            console.log("FROM NODE = WETH = ", response3.data);
        }

        /* for (; ;) {
             {
                 console.log("valueinput", valueinput);
                 const response = await axios.post('http://localhost:5001/totalcoin', { //ETH
                     valueinput, //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ
                     fromtoken: WETH, //WETH -MKR
                     totoken: MKR,
                 })
                 setPrice(response.data)
                 console.log("FROM NODE = MKR = ", response.data);
                 // console.log("from node ", response.data)
                 const response2 = await axios.post('http://localhost:5001/totalcoin', {
                     // valueinput: valueinput,
                     valueinput: response.data.toString(),
                     fromtoken: MKR, //WETH -MKR
                     totoken: DAI,
                 })
                 setPrice1(response2.data)
                 console.log("FROM NODE = DAI = ", response2.data);
                 const response3 = await axios.post('http://localhost:5001/totalcoin', {
                     // valueinput: valueinput,
                     valueinput: response2.data.toString(),
                     fromtoken: DAI, //WETH -MKR
                     totoken: WETH,
                 })
                 setPrice2(response3.data)
                 console.log("FROM NODE = WETH = ", response3.data);
             }
         }*/


        //     const response4 = await axios.post('http://localhost:5001/totalcoin', {
        //         // valueinput: valueinput,
        //         valueinput: response3.data,
        //         //response4 = eth
        //     })
    }
    return (
        <>
            <form>
                <label>
                    ETH:<input type="text" name="name" placeholder="Enter coin" onChange={(e) => setNewId(e.target.value)} />
                </label>
                <label>
                    MKR:<input type="text" name="name" placeholder="Enter coin" value={Price} />
                </label>
                <label>
                    DAI:<input type="text" name="name" value={Price1} />
                </label>
                <label>
                    ETH:<input type="text" name="name" value={Price2} />
                </label>
            </form>
            <br></br>

            <Button
                variant="contained"
                color="primary"
                onClick={() => onSave(newId)}
            >
                Exchang Token
                        </Button>
            <MaterialTable
                columns={[
                    { title: "ETH", field: "START" },
                    { title: "MKR", field: 'Price' },
                    { title: "DAI", field: 'Price1' },
                    { title: "ETH", field: 'Price2' },

                ]}
                data={[
                    { START: 1, Price: Price, Price1: Price1, Price2: Price2 },
                ]}
                title="Demo" />

        </>
    )
}

