import { useEffect, useState } from 'react'
import { api } from '../api/axios'
import { format } from 'date-fns'
import { Table } from '@mantine/core'

interface Link {
  shortUrl: string
  longUrl: string
  expiresAt: Date
  createdAt: Date
}

const ListShorteners: React.FC = () => {
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
    <>
      {linkList.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>Link</th>
              <th>Expiry</th>
            </tr>
          </thead>
          <tbody>
            {linkList.map(link => {
              console.log(link)
              return (
                <tr key={link.shortUrl}>
                  <td>
                    <a href={`http://localhost:2000/api/${link.shortUrl}`}>
                      {link.shortUrl}
                    </a>
                  </td>
                  <td>
                    {format(new Date(link.expiresAt), 'yyyy-MM-dd HH:mm a')}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      )}
    </>
  )
}
export default ListShorteners
