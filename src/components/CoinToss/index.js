// Write your code here
import {Component} from 'react'

import './index.css'

const a = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const b = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {activeImg: a, count: 0, head: 0, tail: 0}

  changeImg = () => {
    const number = Math.ceil(Math.random() * 2)
    this.setState(prevState => ({count: prevState.count + 1}))
    if (number === 1) {
      this.setState({activeImg: a})
      this.setState(prevState => ({head: prevState.head + 1}))
    } else {
      this.setState({activeImg: b})
      this.setState(prevState => ({tail: prevState.tail + 1}))
    }
  }

  render() {
    const {activeImg, count, head, tail} = this.state

    return (
      <div className="container">
        <div className="inner-container">
          <h1>Coin Toss Game</h1>
          <h4>Head (or) Tails</h4>
          <img src={activeImg} alt="coin" className="img" />
          <button type="button" onClick={this.changeImg}>
            Toss Coin
          </button>
          <div className="list-container">
            <p className="list">Total:{count}</p>
            <p className="list">Heads:{head}</p>
            <p className="list">Tail:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
