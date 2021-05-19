import '../../common.scss';
import React, { useState } from 'react';

export default (initProps: { count: number; }) => {
    const [count, setCount] = useState(initProps.count || 0);

    return (
        <div className="demo">
            <div>
                <span>count:{count}</span>
            </div>
            <button onClick={() => setCount(0)}>Reset.</button>
            <button onClick={() => setCount((prevCount: number) => prevCount + 1)}>+</button>
            <button onClick={() => setCount((prevCount: number) => prevCount - 1)}>-</button>
        </div>
    );
};
