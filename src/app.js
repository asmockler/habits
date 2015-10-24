import NormalizeCSS from 'normalize.css';
import Skeleton from 'skeleton-css/css/skeleton.css';
import './global.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import HabitForm from './components/habit_form/habit_form';
import HabitsList from './components/habits_list/habits_list';

import Data from './services/data';

const Application = React.createClass({
  getInitialState : function () {
    var initialHabits = Data.getHabits();
    return {habits : initialHabits};
  },

  updateHabits : function () {
    this.setState({habits : Data.getHabits()});
  },

  addHabit : function (habitName, habitGoal) {
    Data.saveHabit({name: habitName, consecutiveDays : 0, goal: habitGoal}, function () {
      this.updateHabits();
    }.bind(this));
  },

  setDays : function (habitName, numDays) {
    Data.setDays(habitName, numDays, function () {
      this.updateHabits();
    }.bind(this));
  },

  deleteHabit : function (habitName) {
    Data.deleteHabit(habitName, function () {
      this.updateHabits();
    }.bind(this));
  },

  render : function () {
    return (
      <div className="container">
        <h1 className="app-header" onClick={this.testing}>Habits</h1>
        <HabitForm addHabit={this.addHabit} />
        <HabitsList habits={this.state.habits} deleteHabit={this.deleteHabit} setDays={this.setDays} />
      </div>
    );
  }
});

if (!localStorage.habits) localStorage.habits = JSON.stringify([]);
ReactDOM.render(<Application />, document.getElementById('main'));
