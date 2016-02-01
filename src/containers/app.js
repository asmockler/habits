import '../global.scss';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { addHabit, deleteHabit, addDayToHabit } from '../actions/actions'

import HabitForm from '../components/habit_form/habit_form';
import HabitsList from '../components/habits_list/habits_list';

const App = React.createClass({
  render () {
    const { dispatch, habits } = this.props
    return (
      <div className="container">
        <h1>Habits</h1>
        <HabitForm
          onAddClick={text =>
            dispatch(addHabit(text))
          } />
        <HabitsList
          habits={habits}
          onDeleteClick={id =>
            dispatch(deleteHabit(id))
          }
          onAddDayClick={id =>
            dispatch(addDayToHabit(id))
          } />
      </div>
    )
  }
})

App.propTypes = {
  habits: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    numDays: PropTypes.number.isRequired
  }).isRequired).isRequired
}

function select(state) {
  return {
    habits: state.habits
  }
}

export default connect(select)(App)
