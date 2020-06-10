import * as ACTION_TYPES from '../../actions/actionTypes';

const initialState = {
    displaySidedrawer: false,
    layoutTest: 'firstTest'
};

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.DISPLAY_SIDEDRAWER:
            return {
                ...state,
                displaySidedrawer: !state.displaySidedrawer,
                layoutTest: action.payload
            };
        default:
            return state;
    };
};

export default layoutReducer;