import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
    eror:'',
    percent:0
   }

  
   onPercentChange = (e)=>{
    const percent=e.target.value;
    if(percent>=0&percent<=100){
    this.setState({
      percent,  
      eror:''
      })
     }
     else{
       this.setState({
         eror:'Your number is not in range 0,100'
       })
     }
   }
  render() { 
    return ( 
      <React.Fragment>
      <input  value={this.state.percent} type="number" onChange={this.onPercentChange}/>
      <p>{this.state.eror}</p>
      </React.Fragment>
     );
  }
}
 
export default App;