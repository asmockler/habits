import { combineReducers } from 'redux'
import { generateGUID } from '../utilities/generate_guid'
import { getIndexById } from '../utilities/get_index_by_id'
import {
  ADD_DAY_TO_HABIT,
  ADD_HABIT,
  DELETE_HABIT,
  RESET_HABIT_DAY_COUNT,
} from '../constants/action_types'

function habit (state, action) {
  switch (action.type) {
    case ADD_DAY_TO_HABIT:
      return {
        id: state.id,
        name: state.name,
        numDays: ++state.numDays
      }
    case ADD_HABIT:
      return {
        id: generateGUID(),
        name: action.payload.name,
        numDays: 0
      }
    case RESET_HABIT_DAY_COUNT:
      return {
        id: state.id,
        name: state.name,
        numDays: 0
      }
    default:
      return state
  }
}

function habits (state = [], action) {
  let index
  switch (action.type) {
    case ADD_HABIT:
      return [
        ...state,
        habit(undefined, action)
      ]
    case DELETE_HABIT:
      index = getIndexById(state, action.payload.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    case ADD_DAY_TO_HABIT:
      index = getIndexById(state, action.payload.id)
      return [
        ...state.slice(0, index),
        habit(state[index], action),
        ...state.slice(index + 1)
      ]
    case RESET_HABIT_DAY_COUNT:
     index = getIndexById(state, action.payload.id)
     return [
       ...state.slice(0, index),
       habit(state[index], action),
       ...state.slice(index + 1)
     ]
    default:
      return state;
  }
}

const habitsApp = combineReducers({
  habits
})

export default habitsApp
