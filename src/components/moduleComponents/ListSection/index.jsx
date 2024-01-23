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
  useEffect(() => {
    const fetchUserCards = async () => {
      const url = 'https://openmind-api.vercel.app/3-4/subjects/'
      const params = {
        limit: 8,
        offset: (currentPage - 1) * 8,
      }
      const headers = {
        accept: 'application/json',
      }
      try {
        const response = await axios.get(url, { params, headers })
        console.log(response)
        setUserCards(response.data.results)
        setCount(response.data.count)
      } catch (error) {
        console.error('Error fetching user cards:', error)
      }
    }
    fetchUserCards()
  }, [currentPage])
  return (
    <StyledListSection>
      <ListTitle />
      <UserCardList userCards={userCards} />
      <Pagination count={count} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </StyledListSection>
  )
}

export default ListSection
