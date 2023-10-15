import './index.css'

const LanguageTab = props => {
  const {languageDetails, changeActiveLanguage, isActive} = props
  const {buttonText, id} = languageDetails

  const onChangeLanguageTab = () => {
    changeActiveLanguage(id)
  }

  const buttonClass = isActive ? 'active-button' : ''

  return (
    <li key={id}>
      <button
        type="button"
        className={`language-button ${buttonClass}`}
        onClick={onChangeLanguageTab}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageTab
