import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    currentLanguage: 'ALL',
    searchResults: [],
    isLoading: true,
    er: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({isLoading: true})
    const {currentLanguage} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${currentLanguage}`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forksCount,
        starsCount: each.starsCount,
        avatarUrl: each.avatar_url,
      }))
      this.setState({searchResults: formattedData, isLoading: false, er: false})
    } else {
      this.setState({er: true})
    }
  }

  onChange = id => {
    this.setState({currentLanguage: id})
    this.getDetails()
  }

  render() {
    const {searchResults, isLoading, currentLanguage, er} = this.state
    let compo
    if (er) {
      compo = (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            className="err"
            alt="failure view"
          />
          <h1>Something Went Wrong</h1>
        </div>
      )
    } else {
      compo = (
        <div>
          <ul>
            {searchResults.map(each => (
              <RepositoryItem details={each} key={each.id} />
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="bg-con">
        <h1>Popular</h1>
        <ul className="languageList">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              details={each}
              key={each.id}
              isEnabled={each.id === currentLanguage}
              changeLang={this.onChange}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          compo
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
