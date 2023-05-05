import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  changText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'subscribed' : 'subscribe'
  }

  render() {
    const buttontext = this.changText()

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="desc">Thank you! Happy Learning</p>
        <button
          type="button"
          onClick={this.onClickButton}
          className="custom-button"
        >
          {buttontext}
        </button>
        {this.onClickButton}
      </div>
    )
  }
}

export default Welcome
