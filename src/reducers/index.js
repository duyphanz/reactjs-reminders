const redux = require('redux')
const {reminders} = require('./listReducer')


const reducer = redux.combineReducers({
    list: reminders
})


module.exports = { reducer }