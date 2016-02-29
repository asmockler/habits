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
      <div className="HabitForm row">
        <input type="text" value={this.state.name} onChange={this.handleChange} onKeyDown={this.handleEnter} />
        <a href="#" onClick={this.handleClick}>
          Add
        </a>
      </div>
    )
  },

  handleClick (e) {
    e.preventDefault()

    if (this.state.name === '') return;
    
    this.props.onAddClick(this.state.name)
    this.setState({name: ''})
  },

  handleChange (e) {
    this.setState({name: e.target.value});
  },

  handleEnter (e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.handleClick(e)
    }
  }
})

HabitForm.propTypes = {
  onAddClick: PropTypes.func.isRequired
}

export default HabitForm;
