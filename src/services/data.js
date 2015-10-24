const Data = {
  saveHabit : function (habitObject, callback) {
    var habits = JSON.parse(localStorage.habits);
    habits = [...habits, habitObject];
    localStorage.setItem("habits", JSON.stringify(habits));
    if (callback) callback();
  },

  setDays : function (habitKey, numDays, callback) {
    var habit, habits;
    habits = this.getHabits();
    for (var i = 0; i < habits.length; i++) {
      if (habits[i].name === habitKey) {
        habit = habits[i];
      }
    }

    if (habit) {
      habit.consecutiveDays = numDays;
      localStorage.setItem("habits", JSON.stringify(habits));
    }

    if (callback) callback();
  },

  getHabits : function () {
    return JSON.parse(localStorage.habits);
  },

  deleteHabit : function (habitKey, callback) {
    var habits = this.getHabits();
    for (var i = 0; i < habits.length; i++) {
      if ( habits[i].name === habitKey )
        habits.splice(i,1);
    }
    localStorage.setItem("habits", JSON.stringify(habits));
    if (callback) callback();
  }
}

export default Data;


// Shout out to http://stackoverflow.com/a/3146971/5108714
