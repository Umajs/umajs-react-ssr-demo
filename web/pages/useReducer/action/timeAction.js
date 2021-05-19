const GET_TIME = 'GET_TIME';
const RESET_TIME = 'RESET_TIME';
const ADD_TIME = 'ADD_TIME';

const getTime = (time) => ({
    type: GET_TIME,
    time,
});

const resetTime = (time) => ({
    type: RESET_TIME,
    time,
});

const addTime = () => ({
    type: ADD_TIME,
});

const fetchTime = async () => getTime(100);

export { GET_TIME, RESET_TIME, ADD_TIME, getTime, resetTime, addTime, fetchTime };
