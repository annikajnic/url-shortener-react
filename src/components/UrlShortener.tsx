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
      console.log(response.data['shortUrl'])
      setShortUrl(response.data['shortUrl'])
    } catch (error) {
      console.error(error)
    }
  }

  console.log(shortUrl)

  return (
    <>
      <input
        style={{
          width: '500px',
          padding: '10px',
          borderRadius: '5px',
          display: 'inline',
        }}
        onChange={handleChange}
        type="text"
        placeholder="Enter URL"
      />
      <button
        style={{
          display: 'inline',
          padding: '10px',
          borderRadius: '5px',
          margin: '10px',
        }}
        onClick={handleShorten}
      >
        Shorten
      </button>
      {shortUrl && (
        <p>
          <a href={`/${shortUrl}`}>{shortUrl}</a>
        </p>
      )}
    </>
  )
}
export default UrlShortener
