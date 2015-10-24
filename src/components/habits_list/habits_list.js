import React from 'react';
import ReactDOM from 'react-dom';

import Habit from './../habit/habit';

const HabitsList = React.createClass({
  getDefaultProps : function () {
    return({habits : []})
  },

  render : function () {
    var habits = this.props.habits.map(function(habit, key){
      return ( <Habit key={key} habit={habit} deleteHabit={this.props.deleteHabit} setDays={this.props.setDays} /> );
    }.bind(this));

    return(
      <div>
        {habits}
      </div>
    );
  }
});

export default HabitsList;
