const Data = {
  saveHabit : function (habitObject, callback) {
    var habits = JSON.parse(localStorage.habits);
    habits = [...habits, habitObject];
    localStorage.setItem("habits", JSON.stringify(habits));
    if (callback) callback();
  },

  getHabit : function (habitKey) {
    var value = localStorage.getItem(habitKey);
    return value && JSON.parse(value);
  },

  getHabits : function () {
    return JSON.parse(localStorage.habits);
  }
}

export default Data;


// Shout out to http://stackoverflow.com/a/3146971/5108714
