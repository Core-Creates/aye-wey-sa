import React, {Component} from 'react';
// import TodoCard from '../card/Card';
// import Wrapper from '../wrapper/Wrapper';
// import todos from '../footer/footer';  this is where we will need to import different API's

export default class Art_Galleries extends Component {
    state = {
      loading: true,
      person:null
    };
    
  async componentDidMount() {
    const url="https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results, loading: false });
    console.log(data.results[0].name.first);
  }

    render() {
      return (
        <div>
          {this.state.loading || !this.state.person ? (
            <div>loading...</div>
          ) : (
        <div>
          <div>{ this.state.person[0].name.first }</div>
          <div>{ this.state.person[0].name.last }</div>
        </div>
                // <Wrapper>
          /* {this.state.todos.map(todo => (
            <TodoCard
              id={todo.id}
              title={todo.title}
              image={todo.image}
              author={todo.info}
            />
          ))} */
        /* </Wrapper>  */
      )}
      </div>
      );
          }  
        }
  

// export default Art_Galleries;