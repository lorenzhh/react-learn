import { combineReducers } from 'redux';
import postReducer from '../../posts/state/postReducer';

export default combineReducers({
    posts: postReducer
})