// Write your code here
const LanguageFilterItem = props => {
  const {details, isEnabled, changeLang} = props
  const {id, language} = details

  const changee = () => {
    changeLang(id)
  }

  const butt = isEnabled ? 'activee' : 'normall'
  return (
    <li>
      <button className={butt} type="button" onClick={changee}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
