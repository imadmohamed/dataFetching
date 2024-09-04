import { Component } from "react"
import Table from "./Table";
import Form from "./Form";
import ApiEx from "./ApiEx";

class App extends Component{

  state = {
    charactors : []

  }
    removeCharacter = (index) =>{
      const {charactors} = this.state

     let filtered = charactors.filter( (character, i)=>{
          return i!== index
      });

      this.setState({charactors:filtered});

    }

    handleSubmit = (character) =>{
        this.setState({charactors:[...this.state.charactors, character]})
    }

    render(){

      const {charactors} = this.state

      return(
        
        <div className='App'>
  
          <h1>Table</h1>
          <ApiEx/>
          <Table removeCharacter = {this.removeCharacter} charactorsData={charactors}/>
          <Form handleSubmit={this.handleSubmit}/>
          <h1>Api Example</h1>
          
        </div>
      )
    }
  }

  export default App;