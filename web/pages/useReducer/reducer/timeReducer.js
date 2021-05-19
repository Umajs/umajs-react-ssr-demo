import { GET_TIME, RESET_TIME, ADD_TIME } from '../action/timeAction';

const timeReducer = (state, action) => {
    // state当前状态 action下面的是参数可转换到state中去更新
    const handleGetTime = () => ({ ...state, time: action.time });

    const handleResetTime = () => ({ ...state, time: action.time });

    const handleAddTime = () => ({ ...state, time: state.time + 1 });

    switch (action.type) {
        case GET_TIME:
            return handleGetTime();
        case RESET_TIME:
            return handleResetTime();
        case ADD_TIME:
            return handleAddTime();
        default:
            return state;
    }
};

module.exports = timeReducer;
