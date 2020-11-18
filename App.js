import React,{ Component } from 'react';
import './App.css';
import Graph from './components/Graph';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

class App extends Component {
  state={
    sidebarOpen:false
  };
  toggleHandler=()=>{
    this.setState((prevState)=>{
      return {sidebarOpen:!prevState.sidebarOpen}
    })
  }
  backClickHandler=()=>{
    this.setState({sidebarOpen:false})
  }
  render(){
  let sidebarAct;
    if(this.state.sidebarOpen){
      sidebarAct=<Sidebar click={this.backClickHandler}/>
    }
  return (
    <div className="App">
      <Navbar onClickHandler={this.toggleHandler}/>
      {sidebarAct}
      <div className="container">
        <Graph />
      </div>
      
    </div>
  );
}}

export default App;
