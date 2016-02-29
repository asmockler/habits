import {
  ADD_DAY_TO_HABIT,
  ADD_HABIT,
  DELETE_HABIT,
  RESET_HABIT_DAY_COUNT,
} from '../constants/action_types'

export function addHabit(name) {
  return {
    type: ADD_HABIT,
    payload: {
      name: name
    }
  }
}

export function deleteHabit(id) {
  return {
    type: DELETE_HABIT,
    payload: {
      id: id
    }
  }
}

export function addDayToHabit(id) {
  return {
    type: ADD_DAY_TO_HABIT,
    payload: {
      id: id
    }
  }
}

export function resetHabitDayCount(id) {
  return {
    type: RESET_HABIT_DAY_COUNT,
    payload: {
      id: id
    }
  }
}
