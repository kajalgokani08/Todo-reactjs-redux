import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div style={{marginTop:'60px'}}>
    <div className="container">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input className="form-control input" ref={node => {
          input = node
        }} />
        <div style={{marginTop:'30px',textAlign:'right'}}>
        <button className="btn btn-primary" type="submit">
          Add Todo
        </button>
        </div>
      </form>
    </div>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
