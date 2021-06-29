import React, {Component} from 'react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's

class Art_Galleries extends Component {
    state= {
    //   todos
    };
  
    render() {
      return (
        <Wrapper>
          {this.state.todos.map(todo => (
            <TodoCard
              id={todo.id}
              title={todo.title}
              image={todo.image}
              author={todo.info}
            />
          ))}
        </Wrapper> 
      );
    }
  }

export default Art_Galleries;