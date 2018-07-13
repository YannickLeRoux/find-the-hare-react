import { HIDE_HEADER, SHOW_HEADER } from '../actions/types';


export const hideHeader = () => {
  return {
    type: HIDE_HEADER,
    payload: false
  };
};

export const showHeader = () => {
  return {
    type: SHOW_HEADER,
    payload: true
  };
};


