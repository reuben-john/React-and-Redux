import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
  return {
    type: 'FETCH_POSTS',
    payload: response,
  };
};
