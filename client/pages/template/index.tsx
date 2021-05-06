import './index.scss';
import React from 'react';
type typeProps = {
    info:string
}
export default function (props:typeProps){
     const {info} = props;
    return (
        <div className="ts-demo" style={{textAlign: 'center'}}>
            <br/>
            <br/>
            <p className='title'>{ info }</p>
        </div>
    )
}