import {
  SET_SELECTED_CATEGORY,
  SET_CATEGORY_DETAILS_DISPLAY,
} from './actionTypes';


const categories = [
  {categoryId: 1, name: 'Supermarket', icon: 'shopping_cart', subCategories: [1, 2]},
  {categoryId: 2, name: 'Restaurant', icon: 'restaurant', subCategories: [1, 2]},
  {categoryId: 3, name: 'Food', icon: 'fastfood', subCategories: [1, 2]},
  {categoryId: 4, name: 'Health products', icon: 'fitness_center', subCategories: [1, 2]},
  {categoryId: 5, name: 'Movie', icon: 'movie', subCategories: [1, 2]},  
];

const subCategoriesById = {
  1: {
    name: 'Asian',
    items: [
      {
        code: 'Tai Ping',
        name: 'Taiping Supermarket',
      },
      {
        code: 'Da Hua',
        name: 'Dahua Supermarket',
      }
    ],
  },
  2: {
    name: 'Local',
    items: [
      {
        code: 'New World',
        name: 'New World',
      },
      {
        code: 'Pak\'nSave',
        name: 'Pak\'nSave',
      }
    ],
  }
}

const initialState = {
  current: {},
  detailsDisplayed: false,
  list: categories,
  subCategoriesById: subCategoriesById,
};

const category = (state = initialState, action) => {
  switch(action.type) {
    case SET_CATEGORY_DETAILS_DISPLAY:
      return {
        ...state,
        detailsDisplayed: action.payload,
      };
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};

export default category;