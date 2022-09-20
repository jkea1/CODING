//reducer가 combine reducer을 통해 store에 전달된다. 
import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

export default combineReducers({ //combineReducer안에는 항상 객체가 들어간다.  
    move: movieReducer,
});