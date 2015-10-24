import './habit.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Data from './../../services/data';

const Habit = React.createClass({
  addDay : function (e) {
    e.preventDefault();
    var numDays = this.props.habit.consecutiveDays + 1;
    this.props.setDays(this.props.habit.name, numDays);
  },

  resetDays : function (e) {
    e.preventDefault();
    this.props.setDays(this.props.habit.name, 0);
  },

  deleteHabit : function (e) {
    e.preventDefault();
    this.props.deleteHabit(this.props.habit.name);
  },

  render : function () {
    var goalText;
    if (this.props.habit.goal > 0)
      goalText = this.props.habit.consecutiveDays + "/" + this.props.habit.goal + " days";
    else
      goalText = this.props.habit.consecutiveDays + " days";

    return(
      <div className="habit">
        <h2>{this.props.habit.name}</h2>
        <p className="lead">{goalText}</p>
        <div>
          <a href="#" className="button" onClick={this.addDay} >+ Add a Day</a>
          <a href="#" className="button" onClick={this.resetDays} >- Reset</a>
          <a href="#" className="button u-pull-right red" onClick={this.deleteHabit}>x Delete</a>
        </div>
      </div>
    );
  }
});

export default Habit;
