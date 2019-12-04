import React from 'react'
import './App.css'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }
  makeIncrementer = amount => () => 
  this.setState(prevState => ({
    count: prevState.count + amount
  }))

  increment = this.makeIncrementer(1)

  decrement = this.makeIncrementer(-1)

  render(){
    return(
      <div className='App'>
        <p>Count: {this.state.count}</p>
        
        <button 
        className='increment'
        onClick={this.increment}>
        Increment
        </button>

        <button
          className='decrement'
          onClick={this.decrement}
        >Decrement
        </button>

      </div>
    )
  }
}