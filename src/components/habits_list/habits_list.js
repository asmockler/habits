import React, { PropTypes } from 'react'
import Habit from './../habit/habit'

const HabitsList = React.createClass({
  render : function () {
    return(
      <div>
        {this.props.habits.map((habit, key) =>
          <Habit
            key={habit.id}
            onDeleteClick={this.props.onDeleteClick}
            onAddDayClick={this.props.onAddDayClick}
            {...habit} />
        )}
      </div>
    );
  }
});

HabitsList.propTypes = {
  habits: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onAddDayClick: PropTypes.func.isRequired
}

export default HabitsList;
