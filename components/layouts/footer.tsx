import React, { ReactElement } from 'react'

interface Props {
    style?: React.CSSProperties; //ส่งมาจาก LAYOUT ==> COMPONENT STYLE
}

export default function Footes({ style }: Props): ReactElement {
    return (
        <div style={style}>
           <span style={{paddingLeft:240}}>
           copyright © 2020 MasterOfNodeJs 
           </span>
        </div>
    )
}
