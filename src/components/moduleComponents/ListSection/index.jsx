import ListTitle from '../ListTitle'
import StyledListSection from './StyledListSection'
import { UserCardList } from '../UserCardList'
import axios from 'axios'
import Pagination from '../../atomicComponents/Pagination'
import { useEffect, useState } from 'react'

const ListSection = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(0)
  const [userCards, setUserCards] = useState([])
  const [selectedItem, setSelectedItem] = useState('name')
  const [localId, setLocalId] = useState('')
  useEffect(() => {
    setLocalId(localStorage.getItem('userId'))
  }, [])
  useEffect(() => {
    const fetchUserCards = async () => {
      const url = 'https://openmind-api.vercel.app/3-4/subjects/'
      const params = {
        limit: 8,
        offset: (currentPage - 1) * 8,
        sort: selectedItem,
      }
      const headers = {
        accept: 'application/json',
      }

      const response = await axios.get(url, { params, headers })
      setUserCards(response.data.results)
      setCount(response.data.count)
    }
    fetchUserCards()
  }, [currentPage, selectedItem])
  return (
    <StyledListSection>
      <ListTitle selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      <UserCardList userCards={userCards} localId={localId} />
      <Pagination count={count} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </StyledListSection>
  )
}

export default ListSection
