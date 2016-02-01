import './habit.scss'
import React, { PropTypes } from 'react'

const Habit = React.createClass({
  render () {
    return (
      <div className="Habit">
        <div className="row">
          <div className="numDaysBox">
            <p className="num">{this.props.numDays}</p>
            <p>days</p>
          </div>
          <h2>{this.props.name}</h2>
        </div>
        <div className="row buttons">
          <a href="#" onClick={this.handleAddDayClick}>ADD DAY</a>
          <a href="#">RESET</a>
          <a href="#" onClick={this.handleDeleteClick}>DELETE</a>
        </div>
      </div>
    )
  },

  handleDeleteClick(e) { this.props.onDeleteClick(this.props.id) },
  handleAddDayClick(e) { this.props.onAddDayClick(this.props.id) },
})

Habit.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  numDays: PropTypes.number.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onAddDayClick: PropTypes.func.isRequired
}

export default Habit
