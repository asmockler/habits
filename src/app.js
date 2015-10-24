import NormalizeCSS from 'normalize.css';
import Skeleton from 'skeleton-css/css/skeleton.css';
import './global.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import HabitForm from './components/habit_form/habit_form';

import Data from './services/data';

const Application = React.createClass({
  getInitialState : function () {
    var initialHabits = Data.getHabits();
    return {habits : initialHabits};
  },

  addHabit : function (habitName) {
    Data.saveHabit({name: habitName, consecutiveDays : 0}, function () {
      this.setState({habits : Data.getHabits()});
    }.bind(this));
  },

  render : function () {
    console.log(this.state.habits);
    return (
      <div className="container">
        <h1 className="app-header" onClick={this.testing}>Habits</h1>
        <HabitForm addHabit={this.addHabit} />
      </div>
    );
  }
});

if (!localStorage.habits) localStorage.habits = JSON.stringify([]);
ReactDOM.render(<Application />, document.getElementById('main'));
