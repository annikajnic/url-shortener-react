import React, { useEffect, useState } from 'react'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'
import './App.css'
import UrlShortener from './components/UrlShortener'
import ListShorteners, { Link } from './components/ListShorteners'
import { api } from './api/axios'

function App() {
  const [linkList, setLinkList] = useState<Link[]>([])

  async function getLinkList() {
    try {
      const response = await api.request({ method: 'GET', url: '/links' })
      setLinkList(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getLinkList()
  }, [])

  return (
    <MantineProvider>
      <div className="Appz">
        <header className="App-header">
          <h1>Enter a URL to shorten</h1>
          <UrlShortener onComplete={getLinkList} />
          <ListShorteners linkList={linkList} />
        </header>
      </div>
    </MantineProvider>
  )
}

export default App
