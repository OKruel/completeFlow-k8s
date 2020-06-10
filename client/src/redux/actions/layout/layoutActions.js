import store from '../../store';
import * as ACTION_TYPES from '../actionTypes';

const layoutActions = () => {

    const displaySideDrawer = payload => store.dispatch({ type: ACTION_TYPES.DISPLAY_SIDEDRAWER, payload });

    return {
        displaySideDrawer
    };
};

export default layoutActions;