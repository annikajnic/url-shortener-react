import { format, isAfter } from 'date-fns'
import { Container, Table } from '@mantine/core'

export interface Link {
  shortUrl: string
  longUrl: string
  expiresAt: Date
  createdAt: Date
}

const ListShorteners: React.FC<{ linkList: Link[] }> = ({ linkList }) => {
  const filteredLinks = linkList.filter(link =>
    isAfter(new Date(link.expiresAt), new Date()),
  )
  return (
    <Container size={'xl'}>
      {filteredLinks.length > 0 && (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Link</Table.Th>
              <Table.Th>Expiry</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <tbody>
            {filteredLinks.map(link => {
              console.log(link)
              return (
                <Table.Tr key={link.shortUrl}>
                  <Table.Td>
                    <a href={`http://localhost:2000/api/${link.shortUrl}`}>
                      {link.shortUrl}
                    </a>
                  </Table.Td>
                  <Table.Td>
                    {format(new Date(link.expiresAt), 'MMM d, yyyy HH:mm a')}
                  </Table.Td>
                </Table.Tr>
              )
            })}
          </tbody>
        </Table>
      )}
    </Container>
  )
}
export default ListShorteners
