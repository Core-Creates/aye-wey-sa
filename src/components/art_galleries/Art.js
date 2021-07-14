import React, { Component } from 'react';
import Wrapper from '../wrapper/Wrapper';
import TodoCard from '../card/Card';
// import todos from '../footer/footer';  this is where we will need to import different API's
import projects from '../add.json';

class Art extends Component {
  state= {
projects
  };

  render() {
    return (
     
      <Wrapper>
      {this.state.projects.map(project => (
         <TodoCard
           id={project.id}
           title={project.title}
           image={project.image}
           author={project.author}
         />
         ))}
       <div>this is the libraries</div>
     </Wrapper> 
   );
 }
}

// var data = {
//   resource_id: '6d75f6d1-9ff0-48f1-b11b-4904ecebbcfa', // the resource id
//   limit: 5, // get 5 results
//   q: 'jones' // query for 'jones'
// };
// $.ajax({
//   url: 'https://data.sanantonio.gov/api/3/action/datastore_search',
//   data: data,
//   dataType: 'jsonp',
//   success: function(data) {
//     alert('Total results found: ' + data.result.total)
//   }
// });

export default Art