import Head from 'next/head'
import React, { ReactElement, useState, useEffect } from 'react'
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
    const [sum, setSum] = useState([])
    const [total, setTotal] = useState(null)
    const [time, setTime] = useState('')
    const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const OMG = "0xd26114cd6ee289accf82350c8d8487fedb8a0c07";
    const MKR = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
    const USDT = "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e";
    const LCN = "0x0b3df94f9a997981c5ad52b0a16a26f6bb6039ed";
    console.log("Price", Price)
    console.log("newId", newId)
    const timestamp = Date.now(); // This would be the timestamp you want to format
    const realtime = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)
    console.log("realtime",realtime)
    const onSave = async (valueinput: any) => {
        const response = await axios.post('http://localhost:5001/totalcoin', { //ETH
            valueinput, //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ
            fromtoken: WETH, //WETH -MKR
            totoken: MKR,
        })
        //setPrice(response.data) //10
        console.log("FROM NODE = MKR = ", response.data);
        // console.log("from node ", response.data)
        const response2 = await axios.post('http://localhost:5001/totalcoin', {
            // valueinput: valueinput,
            valueinput: response.data.toString(),
            fromtoken: MKR, //WETH -MKR
            totoken: DAI,
        })
        // setPrice1(response2.data)
        console.log("FROM NODE = DAI = ", response2.data);
        const response3 = await axios.post('http://localhost:5001/totalcoin', {
            // valueinput: valueinput,
            valueinput: response2.data.toString(),
            fromtoken: DAI, //WETH -MKR
            totoken: WETH,
        })
        // setPrice2(response3.data)
        console.log("FROM NODE = WETH = ", response3.data);
        console.log("sum ====>", sum)
        setTotal({
            Price1: response.data,
            Price2: response2.data,
            Price3: response3.data,

        })

        const timestart = setTimeout(function () { onSave(valueinput) }, 1);
        setTime(`${timestart}`)
    }

    useEffect(() => {
        console.log("total in newId", newId)
        if (total) {
            console.log("total in useEffect", total)
            setSum([...sum, { ...total, newId: `${newId}` }])
        }
    }, [total])
    return (
        <>
            <form>
                <label>
                    ETH:<input type="text" name="name" placeholder="Enter coin" onChange={(e) => setNewId(e.target.value)} />
                </label>
            </form>
            <br></br>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {

                    onSave(newId)
                }}
            > Exchang Token
            </Button>
            <MaterialTable
                columns={[
                    { title: "ETH", field: 'start' },
                    { title: "MKR", field: 'Price' },
                    { title: "DAI", field: 'Price1' },
                    { title: "ETH", field: 'Price2' },
                    { title: "Time", field: 'Time' },
                ]}
                data={sum.map((Show) =>
                    ({ start: `${Show.newId}`, Price: Show.Price1, Price1: Show.Price2, Price2: Show.Price3,Time:realtime })
                )
                }
                title="Demo" />
        </>
    )
}

