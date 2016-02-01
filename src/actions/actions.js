import { ADD_HABIT, DELETE_HABIT, ADD_DAY_TO_HABIT } from '../constants/action_types'

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
