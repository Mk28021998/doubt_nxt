import './index.css'
import {BiSearch} from 'react-icons/bi'

const FiltersGroup = props => {
  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }
  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-cont">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BiSearch className="search-img" />
      </div>
    )
  }

  const renderCategoryListItemCont = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory} = props
      const onClickCategoryItem = () => {
        changeCategory(category.categoryId)
      }
      return (
        <li
          className="category-items-cont"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className="category-name">{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategory = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list-cont">{renderCategoryListItemCont()}</ul>
    </>
  )

  const renderRatingFilterList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {changeRating} = props
      const onClickRatingItem = () => {
        changeRating(rating.ratingId)
      }
      return (
        <li
          className="rating-ltems-cont"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className="rating-text">& up</p>
        </li>
      )
    })
  }

  const renderRatingFilter = () => (
    <>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list-cont">{renderRatingFilterList()}</ul>
    </>
  )

  const {clearFilter} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategory()}
      {renderRatingFilter()}
      <button type="button" className="clear-btn" onClick={clearFilter}>
        Clear Filters
      </button>
      {/* Replace this element with your code */}
    </div>
  )
}

export default FiltersGroup
