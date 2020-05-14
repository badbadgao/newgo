import {
  SET_SELECTED_CATEGORY,
  SET_CATEGORY_DETAILS_DISPLAY,
} from './actionTypes';

export const setSelectedCategory = category => ({
  type: SET_SELECTED_CATEGORY,
  payload: category,
});

export const setCategoryDisplay = displayed => ({
  type: SET_CATEGORY_DETAILS_DISPLAY,
  payload: displayed
});
