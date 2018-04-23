const GET_PROFILE = 'GET_PROFILE';
const GET_IS_LOADING = 'GET_IS_LOADING';
const GET_ERROR = 'GET_ERROR';

export const get_profile = profile => ({
    type: GET_PROFILE,
    payload: profile
});

export const get_is_loading = () => ({
  type: GET_IS_LOADING,
});

export const get_error = (isError) => ({
  type: GET_ERROR,
  payload: isError
});


const initialState = {
    profile: [],
    error: '',
    isLoading: false,
};

const filterProfile = (items, profile) => items.filter(item => item.itemowner.id === profile);


// thunk
export const fetchProfileFromUrl = (userid) => dispatch => {
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

dispatch(get_is_loading());
Promise.all(urls.map(url => fetch(url)
.then(resp => resp.json())))
.then(responses => dispatch(get_profile(filterProfile(combineItemsAndUsers(responses), userid))))
.catch(error => dispatch(get_error(error)));
};


export default (state = initialState, action) => {
      switch (action.type) {
        case GET_IS_LOADING: {
          return { ...state, isLoading: true, error: '' };
        }
          case GET_PROFILE: {
            const profile = action.payload;
            return { ...state, isLoading: false, error: '', profile };
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

