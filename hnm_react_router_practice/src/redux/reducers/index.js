import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import productReducer from './productReducer';

//conbineReducer 객체의 형태로 reducers 을 합쳐주는 역할을 한다. 
export default combineReducers({
    auth: authenticateReducer,
    product: productReducer,
});