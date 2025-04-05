import React from 'react'
import './App.css'
import UrlShortener from './components/UrlShortener'

function App() {
  return (
    <div className="Appz">
      <header className="App-header">
        <h1>Enter a URL to shorten</h1>
        <UrlShortener />
      </header>
    </div>
  )
}

export default App
