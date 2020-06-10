import * as ACTION_TYPES from '../../actions/actionTypes';

const initialState = {
    displaySidedrawer: false
};

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.DISPLAY_SIDEDRAWER:
            return {
                ...state,
                displaySidedrawer: !state.displaySidedrawer
            };
        default:
            return state;
    };
};

export default layoutReducer;