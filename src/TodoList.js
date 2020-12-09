import React, { Component } from 'react'

import {connect} from'react-redux'
import {bindActionCreators} from 'redux'
import { Creators as TodoActions } from './store/ducks/todos'
import { unstable_batchedUpdates } from 'react-dom'

class TodoList extends Component {

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.inp[unstable_batchedUpdates.value])

    this.input.value('')
  }

  render() {
    const {todos, toggleTodo, removeTodo } = this.props

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input ref={el => (this.input = el)}/>
          <button type="submit">Novo</button>
        </form>

        <ul>
          {todos.map(todo => (
            <li>
              {todo.complete ? <s>{todo.text}</s> : todo.text}

            <div>
              <button onClick={() => toggleTodo(todo.id)} ></button>
              <button onClick={() => removeTodo(todo.id)} ></button>
            </div>
            </li>
          ))}
        </ul>
        
      </section>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);