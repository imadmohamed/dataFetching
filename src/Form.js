import { Component } from "react";

class Form extends Component{
    initialState = {
        name: "",
        job: ""
    }

    state = this.initialState

    handleChane = (event) =>{
      const {name, value} = event.target
      this.setState({[name]:[value]})
    }

    submitForm = () =>{
        let charector = this.state
        this.props.handleSubmit(charector)
        this.setState(this.initialState);
    }

    render(){
        return(
            <form>
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                name ="name"
                id="name" 
                value={this.state.name}
                onChange={this.handleChane}
                />
                <label htmlFor="job">Job</label>
                <input
                type="text"
                name="job"
                id="job"
                value={this.state.job}
                onChange={this.handleChane}
                />
                <input onClick={this.submitForm} type="button" value="Submit"/>
            </form>
        )
    }

}
export default Form;