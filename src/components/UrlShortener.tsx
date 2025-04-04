import { useState } from 'react'
import { api } from '../api/axios'

const UrlShortener: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  async function handleShorten() {
    try {
      const response = await api.post('/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ longUrl: inputValue.trim() }),
      })
      setShortUrl(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <input onChange={handleChange} type="text" placeholder="Enter URL" />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && (
        <p>
          <a href={shortUrl}>{shortUrl}</a>
        </p>
      )}
    </>
  )
}
export default UrlShortener
