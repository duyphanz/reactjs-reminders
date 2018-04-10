


const addReminder = (text) => {
    const action = {
        type: 'ADD_REMINDER',
        text
    }
    //console.log('action in addreminder', action)
    return action;
}

const deleteReminder = (id) => {
    return {
        type: 'DELETE_REMINDER',
        id
    }
}

module.exports = {addReminder, deleteReminder}
