import { useState } from 'react'
import { api } from '../api/axios'
import { Button, Group, Input } from '@mantine/core'

const UrlShortener: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [inputValue, setInputValue] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  async function handleShorten() {
    if (inputValue.length === 0) return
    setInputValue('')
    try {
      await api
        .post('/shorten', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          data: { longUrl: inputValue.trim() },
        })
        .then(() => {
          onComplete()
        })
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
    </Group>
  )
}
export default UrlShortener
