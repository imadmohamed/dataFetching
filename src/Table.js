import { Component } from "react";

const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) =>{
    const {charactorsData,removeCharacter} = props

    const rows = charactorsData.map( (charector,index)=>{
        return (<tr key = {index}><td>{charector.name}</td><td>{charector.job}</td>
        <td><button onClick={ ()=>removeCharacter(index)}>Delete</button></td></tr>)
    })
    return(
        <tbody>  
            {rows}
        </tbody>
                
    )
}

class Table extends Component{
    render(){
     const {charactorsData, removeCharacter}  = this.props
        return(
            <table>
                <TableHeader/>
                <TableBody removeCharacter={removeCharacter}
                
                charactorsData = {charactorsData}/>  
            </table>
        )
    }
}
export default Table;