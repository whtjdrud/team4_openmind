import React, { useState } from 'react'
import arrowLeft from '../../../assets/images/Arrow-left.svg'
import arrowRight from '../../../assets/images/Arrow-right.svg'
import { PageButton, PaginationBox } from './StylePagination'

const ITEMS_PER_PAGE = 4
const PAGE_GROUP_SIZE = 5

function processData(data, currentPage) {
  const lastItemIndex = currentPage * ITEMS_PER_PAGE
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE
  return data.slice(firstItemIndex, lastItemIndex)
}

const Pagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const maxPage = Math.ceil(data.length / ITEMS_PER_PAGE)
  const currentItems = processData(data, currentPage)

  const startPage = Math.floor((currentPage - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, maxPage)
  const isInFirstPageGroup = currentPage <= PAGE_GROUP_SIZE
  const isInLastPageGroup = currentPage > (Math.ceil(maxPage / PAGE_GROUP_SIZE) - 1) * PAGE_GROUP_SIZE

  return (
    <>
      {currentItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <PaginationBox>
        {!isInFirstPageGroup && (
          <button type='button' onClick={() => setCurrentPage(startPage - 1)}>
            <img src={arrowLeft} alt='Previous' />
          </button>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((number) => (
          <PageButton key={number} $clicked={number === currentPage} onClick={() => setCurrentPage(number)}>
            {number}
          </PageButton>
        ))}
        {!isInLastPageGroup && (
          <button type='button' onClick={() => setCurrentPage(startPage + PAGE_GROUP_SIZE)}>
            <img src={arrowRight} alt='Next' />
          </button>
        )}
      </PaginationBox>
    </>
  )
}

export default Pagination
