

const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

const reminders = (state = [], action) => {
    let reminders = null
    switch(action.type){
        case 'ADD_REMINDER':
            reminders = [...state, reminder(action)]
            return reminders
        case 'DELETE_REMINDER':
            return state.filter( e => {
                return e.id !== action.id
            })
            
        default:
            return state

    }
}

module.exports = { reminders }