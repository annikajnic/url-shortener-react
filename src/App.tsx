import React from 'react'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'
import './App.css'
import UrlShortener from './components/UrlShortener'
import ListShorteners from './components/ListShorteners'

function App() {
  return (
    <MantineProvider>
      <div className="Appz">
        <header className="App-header">
          <h1>Enter a URL to shorten</h1>
          <UrlShortener />
          <ListShorteners />
        </header>
      </div>
    </MantineProvider>
  )
}

export default App
