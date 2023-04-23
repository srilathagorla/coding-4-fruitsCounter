// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, banana: 0}

  mangoes = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  bananas = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {count, banana} = this.state
    return (
      <div className="container">
        <div className="white-container">
          <h1>
            Bob ate {count} mangoes {banana} bananas
          </h1>
          <div className="fruits-section">
            <div className="mangoes-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes"
                className="image-size"
              />
              <button className="mango" onClick={this.mangoes}>
                Eat Mango
              </button>
            </div>
            <div className="mangoes-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image-size"
              />
              <button className="mango" onClick={this.bananas}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
