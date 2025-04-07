import { useState } from 'react'
import { api } from '../api/axios'
import { Button, Group, Input } from '@mantine/core'

const UrlShortener: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  async function handleShorten() {
    if (inputValue.length === 0) return
    setInputValue('')
    try {
      const response = await api.post('/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        data: { longUrl: inputValue.trim() },
      })
      setShortUrl(response.data['shortUrl'])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Group>
      <Input
        style={{
          width: '500px',
          padding: '10px',
          borderRadius: '5px',
        }}
        onChange={handleChange}
        type="text"
        placeholder="Enter URL"
      />
      <Button onClick={handleShorten}>Shorten</Button>
      {shortUrl && (
        <p style={{ color: 'white' }}>
          <a href={`http://localhost:2000/api/${shortUrl}`}>{shortUrl}</a>
        </p>
      )}
    </Group>
  )
}
export default UrlShortener
