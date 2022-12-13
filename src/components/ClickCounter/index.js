import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  counter = () => {
    this.setState(prevValue => ({count: prevValue.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">
            The Button has been clicked <span>{count}</span> times
          </h1>
          <p className="parag">Click the button to increase the count</p>
          <button className="button" onClick={this.counter}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
