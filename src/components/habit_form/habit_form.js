import './habit_form.scss';
import React, { PropTypes } from 'react'

const HabitForm = React.createClass({
  getInitialState () {
    return {
      name: '',
      numDays: 0
    }
  },

  render () {
    return (
      <div className="row">
        <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
        <a href="#" onClick={this.handleClick}>
          Add
        </a>
      </div>
    )
  },

  handleClick (e) {
    e.preventDefault()
    this.props.onAddClick(this.state.name)
    this.setState({name: ''})
  }
})

HabitForm.propTypes = {
  onAddClick: PropTypes.func.isRequired
}

export default HabitForm;
