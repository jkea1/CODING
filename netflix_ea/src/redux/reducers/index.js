//reducer가 combine reducer을 통해 store에 전달된다. 
import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

export default combineReducers({
    move: movieReducer,
});