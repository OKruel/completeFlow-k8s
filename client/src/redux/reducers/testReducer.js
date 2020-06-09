import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
    test: 'test1'
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.TEST:
            return {
                ...state,
                test: 'anotherTest'
            };
    
        default:
            return state;
    };
};

export default testReducer;