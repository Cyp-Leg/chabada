import React from 'react'
import SearchField from './components/SearchField'
import LyricsSearchProvider from './components/SearchContext'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Chabadaaaaa</h1>
      </header>
      <div className='content'>
        <LyricsSearchProvider>
          <SearchField />
        </LyricsSearchProvider>
      </div>
    </div>
  )
}

export default App
