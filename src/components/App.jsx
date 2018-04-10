import React from 'react';
import { connect } from 'react-redux'
var { addReminder, deleteReminder } = require('../actions/index.js')



class App extends React.Component {

    addReminder() {

        this.props.addReminder(this.refs.text.value)
        this.refs.text.value = '';
        console.log('Props: ', this.props)
    }

    deleteReminder(id) {
        this.props.deleteReminder(id)

    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.text}</div>

                                </div>
                                <div
                                    className="list-item delete-button"
                                    onClick={() => this.deleteReminder(reminder.id)}
                                >
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    render() {
        return (
            <div className='App'>
                <div className="div-title">
                    Reminder
                    <div className="form-inline">
                        <div className="form-group">
                            <input className="form-control" placeholder='Must do ...' ref='text' />
                        </div>
                        <button className="btn btn-success" onClick={() => { this.addReminder() }} >Add Reminder</button>
                    </div>
                </div>
                {this.renderReminders()}
            </div>
        )
    }

}

export default connect(function (state) {
    console.log('state: ', state)
    return {
        reminders: state.list
    }
}, { addReminder, deleteReminder })(App);