const GET_ITEMS = 'GET_ITEMS';
const GET_IS_LOADING = 'GET_IS_LOADING';
const GET_ERROR = 'GET_ERROR';
const GET_ITEM_FILTERS = 'GET_ITEM_FILTERS';
export const get_items = (items) => ({
  type: GET_ITEMS,
  payload: items
});

export const get_is_loading = () => ({
  type: GET_IS_LOADING,

});

export const get_error = (isError) => ({
  type: GET_ERROR,
  payload: isError
});

export const get_item_filters = (itemFilters) => ({
  type: GET_ITEM_FILTERS,
  payload: itemFilters
});

const initialState = {
  items: [],
  isLoading: false,
  itemFilters: [],
  error: ''
};
// all our function first


export const fetchItemsFromUrl = () => dispatch => {
const urls = ['http://localhost:3000/items', 'http://localhost:3000/users'];
const combineItemsAndUsers = itemsAndUsers => {
itemsAndUsers[0].forEach(item => {
  itemsAndUsers[1].forEach(user => {
            if (user.id === item.itemowner) {
              item.itemowner = user;
            }
  });
});
return itemsAndUsers[0];
};

 // we use functions when we need to
dispatch(get_is_loading());
Promise.all(urls.map(url => fetch(url)
.then(resp => resp.json())))
.then(responses => dispatch(get_items(combineItemsAndUsers(responses))))
.catch(error => dispatch(get_error(error)));
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IS_LOADING: {
      return { ...state, isLoading: true, error: '' };
    }
    case GET_ITEMS: {
      const items = action.payload;
      return { ...state, items, isLoading: false, error: '' };
    }
    case GET_ITEM_FILTERS: {
      const itemFilters = [...state.itemFilters];
      if (!itemFilters.includes(action.payload)) {
        itemFilters.push(action.payload);
      } else {
        const index = itemFilters.indexOf(action.payload);
        if (index >= 0) {
          itemFilters.splice(index, 1);
        }
      }
      return { ...state, itemFilters };
    }
    case GET_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
