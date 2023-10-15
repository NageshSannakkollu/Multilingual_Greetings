import {Component} from 'react'
import LanguageTab from './components/LanguageTab'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  changeActiveLanguage = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {activeTabId} = this.state
    console.log(activeTabId)
    console.log(languageGreetingsList[activeTabId])

    return (
      <div className="app-container">
        <div className="multilingual-app-container">
          <h1>Multilingual Greetings</h1>
          <ul className="buttons-container">
            {languageGreetingsList.map(eachLanguage => (
              <LanguageTab
                languageDetails={eachLanguage}
                key={eachLanguage.id}
                isActive={activeTabId === eachLanguage.id}
                changeActiveLanguage={this.changeActiveLanguage}
              />
            ))}
          </ul>
          {languageGreetingsList.map(eachImageUrl => {
            if (eachImageUrl.id === activeTabId) {
              return (
                <img
                  src={eachImageUrl.imageUrl}
                  alt={eachImageUrl.imageAltText}
                  className="language-image"
                  key={activeTabId}
                />
              )
            }
            return null
          })}
        </div>
      </div>
    )
  }
}

export default App
