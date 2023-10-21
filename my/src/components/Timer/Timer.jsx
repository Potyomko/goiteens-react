import { Component } from "react";

export class Timer extends Component{
    state = {
        time: 0
          }

    componentDidMount(){
        this.intervalId = setInterval(()=>{
           this.setState((prevState)=>{
             return {
             time: prevState.time + 1
             }
           
           })
         }, 1000)
     
       }
       componentWillUnmount(){
     clearInterval(this.intervalId)
       }
render(){
    return(
        <div>
    <h1>Timer</h1>
    <p>{this.state.time}sec</p>

        </div>
    
        
    )
}
}