const redux = require('redux');
const { reducer } = require('./reducers/index')

const store = redux.createStore(reducer);

module.exports = store;

