import React from 'react';
import { connect } from 'react-redux';

import { addTodoItem, removeTodoItem } from '../actions';

class TodoAddRemove extends React.Component {
  state = {
    newTodoText: '',
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodoItem = e => {
    e.preventDefault();
    this.props.addTodoItem(this.state.newTodoText);
    this.setState({newTodoText: ''})
  };

  render() {
    return (
        <div>
            <div>
                <input
                    className="todo-input"
                    type="text"
                    name="newTodoText"
                    value={this.state.newTodoText}
                    onChange={this.handleChanges}
                />
                <button onClick={this.addTodoItem}>Update title</button>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    todoArray: state.todoArray
  };
};

export default connect(
  mapStateToProps,
  { addTodoItem, removeTodoItem }
)(TodoAddRemove);
