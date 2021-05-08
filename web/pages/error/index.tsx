import React from 'react';
type typeProps = {
    msg:string,
}
export default function (props:typeProps){
    return (
        <div className ='ts-demo' >
            <p>服务器异常</p>
            <pre>
                {props.msg}
            </pre>
        </div>
    )
}