import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    );
    //composeWithDevTools로 감싸주면 된다. 

export default store;