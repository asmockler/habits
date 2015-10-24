import './habit_form.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const HabitForm = React.createClass({
  getInitialState : function () {
    return { habitName: '', habitGoal: 0 }
  },

  handleNameChange: function(e) {
    this.setState({habitName: e.target.value});
  },

  handleGoalChange : function (e) {
    this.setState({habitGoal: e.target.value});
  },

  handleSubmit : function (e) {
    e.preventDefault();
    this.props.addHabit(this.state.habitName, this.state.habitGoal);
    this.setState({habitName: ''});
  },

  render : function () {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="eight columns">
            <input className="u-full-width" type="text" value={this.state.habitName} onChange={this.handleNameChange} placeholder="New Habit" />
          </div>
          <div className="two columns">
            <input className="u-full-width" type="number" name="habitGoal" value={this.state.habitGoal} onChange={this.handleGoalChange} placeholder="Goal (num days)" />
          </div>
          <div className="two columns">
            <input className="button-primary u-full-width" type="submit" value="Add" />
          </div>
        </div>
      </form>
    );
  }
});

export default HabitForm;
