import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectedCapitalItem: countryAndCapitalsList[0],
  }

  onChangeCapital = event => {
    const updatedSelectedCapitalItem = countryAndCapitalsList.find(
      eachItem => eachItem.id === event.target.value,
    )

    this.setState({selectedCapitalItem: updatedSelectedCapitalItem})
  }

  render() {
    const {selectedCapitalItem} = this.state

    return (
      <div className="main-bg-container">
        <div className="bg-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="dropdown-list"
              name="capitals"
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question-text">is capital of which country?</p>
          </div>
          <h1 className="country-name">{selectedCapitalItem.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
