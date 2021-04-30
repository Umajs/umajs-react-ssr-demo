import './index.scss';
import React from 'react';
type typeProps = {
    say:string
}
export default function (props:typeProps){
     const {say} = props;
    return (
        <div className ='ts-demo' >{say}!!!!</div>
    )
}