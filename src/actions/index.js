import jsonPlaceholder from '../apis/jsonPlaceholder'
import {memoize, uniq, map} from 'lodash'

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data})
  }
}

export const fetchUser = (id) => {
  return async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data})
  }
}


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  const userIds = uniq(map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
}
