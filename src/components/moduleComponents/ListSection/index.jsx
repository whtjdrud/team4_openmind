import ListTitle from '../ListTitle'
import StyledListSection from './StyledListSection'
import { UserCardList } from '../UserCardList'
import axios from 'axios'
import Pagination from '../../atomicComponents/Pagination'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const ListSection = () => {
  const [search] = useSearchParams()
  const URL_PAGE = search.get('page')
  const URL_SORT = search.get('sort')
  const [currentPage, setCurrentPage] = useState(Number(URL_PAGE) || 1)
  const [count, setCount] = useState(0)
  const [userCards, setUserCards] = useState([])
  const [selectedItem, setSelectedItem] = useState(URL_SORT || 'name')
  const [localId, setLocalId] = useState('')
  useEffect(() => {
    if (URL_PAGE) {
      setCurrentPage(Number(URL_PAGE))
    }
  }, [URL_PAGE])
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
      <Pagination count={count} currentPage={currentPage} setCurrentPage={setCurrentPage} selectedItem={selectedItem} />
    </StyledListSection>
  )
}

export default ListSection
