import React, { useState } from 'react'

export const LyricsSearchContext = React.createContext()

const LyricsSearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState(null)
  return (
    <LyricsSearchContext.Provider
      value={{
        searchResults,
        setSearchResults
      }}
    >
      {children}
    </LyricsSearchContext.Provider>
  )
}

export default LyricsSearchProvider
