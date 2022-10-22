import React from 'react'
import { SearchContext } from '../../App'

import styles from './Search.module.scss'

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext)

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <g data-name="Layer 2" id="Layer_2">
          <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
        </g>
      </svg>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue('')}
          className={styles.clearIcon}
          data-name="Layer 1"
          id="Layer_1"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path
            d="M8.25,0,32,23.75,55.75,0,64,8.25,40.25,32,64,55.75,55.75,64,32,40.25,8.25,64,0,55.75,23.75,32,0,8.25Z"
            data-name="&lt;Compound Path&gt;"
            id="_Compound_Path_"
          />
        </svg>
      )}
    </div>
  )
}

export default Search
