import './habit_form.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const HabitForm = React.createClass({
  getInitialState : function () {
    return { habitName: '' }
  },

  handleChange: function(e) {
    this.setState({habitName: e.target.value});
  },

  handleSubmit : function (e) {
    e.preventDefault();
    this.props.addHabit(this.state.habitName)
  },

  render : function () {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="four columns">
            <input className="u-full-width" type="text" value={this.state.habitName} onChange={this.handleChange} placeholder="New Habit" />
          </div>
          <div className="two columns">
            <input className="button-primary" type="submit" value="Add" />
          </div>
        </div>
      </form>
    );
  }
});

export default HabitForm;
