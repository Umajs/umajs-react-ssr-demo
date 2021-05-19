import React from 'react';

type typeProps = {
    error:Error,
}
export default function (props:typeProps) {
    const { error } = props;

    return (
        <div className ='ts-demo' style={{ fontSize: 12 }} >
            <p>服务器异常</p>
            <pre>
                {error.stack}
            </pre>
        </div>
    );
}
