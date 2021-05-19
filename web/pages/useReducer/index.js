import '../../common.scss';
import React, { useReducer } from 'react';
import TimeReducer from './reducer/timeReducer';
import { resetTime, addTime, fetchTime } from './action/timeAction';

export default (initProps) => {
    const [reduxState, dispatch] = useReducer(TimeReducer, { time: initProps.time });

    return (
        <div className="demo">
            time: {reduxState.time}
            <button
                onClick={async () => {
                    fetchTime().then((action) => {
                        dispatch(action);
                    });
                }}>
                get
            </button>
            <button
                onClick={() => {
                    dispatch(resetTime(0));
                }}>
                resetTime
            </button>
            <button
                onClick={() => {
                    dispatch(addTime());
                }}>
                add
            </button>
        </div>
    );
};
