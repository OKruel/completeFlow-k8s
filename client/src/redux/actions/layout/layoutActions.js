import store from '../../store';
import * as ACTION_TYPES from '../actionTypes';

const layoutActions = () => {

    const displaySideDrawer = () => store.dispatch({ type: ACTION_TYPES.DISPLAY_SIDEDRAWER });

    return {
        displaySideDrawer
    };
};

export default layoutActions;