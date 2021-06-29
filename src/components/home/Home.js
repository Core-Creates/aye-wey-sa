import React, {Component} from 'react';
import TodoCard from '../card/Card';
import Wrapper from '../wrapper/Wrapper';
import Carousel from '../carousel/Carousel'
import todos from '../footer/footer'

class Home extends Component {
    state= {
      todos
    };
  
    render() {
      return (
        <Wrapper>
            <Carousel/>
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

export default Home;