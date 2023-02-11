import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {min: 0, seconds: 0, start: false}

  onStart = async () => {
    this.setState({start: true})
    this.timerId = setInterval(this.tick, 1000)
  }

  onStop = () => {
    this.setState({start: false})
    clearInterval(this.timerId)
  }

  tick = async () => {
    await this.setState(prevState => ({seconds: prevState.seconds + 1}))
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prevState => ({min: prevState.min + 1, seconds: 0}))
    }
  }

  onReset = () => {
    this.setState({start: false, min: 0, seconds: 0})
    clearInterval(this.timerId)
  }

  render() {
    const {min, seconds} = this.state

    return (
      <div className="main">
        <h1>Stopwatch</h1>
        <div className="sub">
          <p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            Timer
          </p>
          <h1>
            {min > 9 ? min : `0${min}`}:{seconds > 9 ? seconds : `0${seconds}`}
          </h1>
          <div className="buttons">
            <button onClick={this.onStart} type="button">
              Start
            </button>
            <button onClick={this.onStop} type="button">
              Stop
            </button>
            <button onClick={this.onReset} type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
