// Write your code here
const RepositoryItem = props => {
  const {details} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = details
  return (
    <li>
      <div>
        <img src={avatarUrl} className="logo" alt="avatar" />
        <h1>{name}</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="icon"
          />
          <p>{starsCount} stars</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="icon"
          />
          <p>{forksCount} forks</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="icon"
          />
          <p>{issuesCount} open issues </p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
