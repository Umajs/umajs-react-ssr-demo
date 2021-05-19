import '../../common.scss';
import './index.scss';
import React from 'react';

type typeProps = {
    info:string
}
export default function (props:typeProps) {
    const { info } = props;

    return (
        <div className="demo" style={{ textAlign: 'center' }}>
            <p className='title'>{ info }</p>
        </div>
    );
}
