import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";



class Employees extends Component {
    state = {
        result: {}
    };
  
//     // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
      API.getAll()
        .then( res =>
            this.setState({result: res.data})
            
        )
        .catch(err => console.log(err));
    }
// //   res => this.setState({ breeds: res.data.message })
//     handleInputChange = event => {
//       this.setState({ search: event.target.value });
//     };
  
//     handleFormSubmit = event => {
//       event.preventDefault();
//       API.getDogsOfBreed(this.state.search)
//         .then(res => {
//           if (res.data.status === "error") {
//             throw new Error(res.data.message);
//           }
//           this.setState({ results: res.data.message, error: "" });
//         })
//         .catch(err => this.setState({ error: err.message }));
//     };
    render() {
    console.log(this.state.result);

      return 
    }
  }
export default Employees;
