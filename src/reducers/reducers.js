import { combineReducers } from 'redux'
import { generateGUID } from '../utilities/generate_guid'
import { getIndexById } from '../utilities/get_index_by_id'
import { ADD_HABIT, DELETE_HABIT, ADD_DAY_TO_HABIT } from '../constants/action_types'

function habit (state, action) {
  switch (action.type) {
    case ADD_HABIT:
      return {
        id: generateGUID(),
        name: action.payload.name,
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
        Object.assign({}, state[index], {
          numDays: ++state[index].numDays
        }),
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
