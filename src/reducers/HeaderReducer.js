import { HIDE_HEADER, SHOW_HEADER } from '../actions/types';

const INITIAL_STATE = {
    isHeaderVisible: true
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case HIDE_HEADER:
          return { isHeaderVisible: action.payload };

        case SHOW_HEADER:
          return { isHeaderVisible: action.payload };

        default:
          return state;
    }

}