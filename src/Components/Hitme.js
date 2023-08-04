import React, { Component, useState } from 'react'
import './Style.css'

export class Hitme extends Component {
    constructor(){
        super()
        this.state={
            score:0,
            time:10
        }
    }
    componentDidMount(){
        this.interval = setInterval(this.tick,1000);
    }

    tick = () =>{
        if(this.state.time === 0){
              return
        }
        this.setState({
            time:this.state.time - 1
        })
    }
    incrementScore=()=>{
        if(this.state.time>0){
        this.setState(prevState=>{
            return {score:prevState.score + 1}
        })}
        else{
            window.alert(`Your High Score is ${this.state.score}, Restart`)
        }
    }
  render() {
    return (
      <div>
        <h3>Become Batman and Beat Superman</h3>
        <h1> Time :{this.state.time}</h1>
        <button className='ImgButton' onClick={this.incrementScore}>
        <img src='https://images.hdqwalls.com/download/black-superman-suit-4k-jm-1600x1200.jpg' alt='Superman' height="500px"/>
        </button>
        <h1>Your Score is {this.state.score}</h1>
        <button className='restartButton' onClick={()=>{this.setState({time:30,score:0})}}>Restart</button>
      </div>
    )
  }
}

export default Hitme