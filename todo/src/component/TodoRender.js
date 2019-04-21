import React from 'react';
import { connect } from 'react-redux';

import { toggleCompleteStatus } from '../actions';

class RenderTodo extends React.Component {
    state = {
      completedStatus: true,
    };
  
    toggle = (e) => {
        let container;
        for(let i=0; i<this.props.todoArray.length; i++) {
            if(this.props.todoArray[i].id == e.target.id) {
                container = this.props.todoArray[i]
            }
        }
      this.props.toggleCompleteStatus( container );
      console.log(container)
    };
  
    render() {
      return (
            <div>
                {this.props.todoArray.map((obj, index) => 
                    <div id={index}>
                        <h3>{obj.task}</h3>
                        <button id={index} onClick={this.toggle}>x</button>
                    </div>
                )}
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
    { toggleCompleteStatus }
  )(RenderTodo);
  