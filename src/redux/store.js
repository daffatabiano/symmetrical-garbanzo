import DelModalsReducers from './reducers/DelModals';

const { legacy_createStore, combineReducers } = require('redux');
const { default: addModalReducers } = require('./reducers/AddModals');

const rootReducer = combineReducers({
    modalShow: addModalReducers,
    modalDelete: DelModalsReducers,
});

const store = legacy_createStore(rootReducer);
export default store;
