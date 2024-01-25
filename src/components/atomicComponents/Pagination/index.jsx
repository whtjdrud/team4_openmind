import { Link } from 'react-router-dom'
import arrowLeft from '../../../assets/images/Arrow-left.svg'
import arrowRight from '../../../assets/images/Arrow-right.svg'
import { PageButton, PaginationBox } from './StylePagination'

const ITEMS_PER_PAGE = 8
const PAGE_GROUP_SIZE = 5

const Pagination = ({ count, currentPage, setCurrentPage, selectedItem }) => {
  const maxPage = Math.ceil(count / ITEMS_PER_PAGE)
  const startPage = Math.floor((currentPage - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, maxPage)
  const isInFirstPageGroup = currentPage <= PAGE_GROUP_SIZE
  const isInLastPageGroup = currentPage > (Math.ceil(maxPage / PAGE_GROUP_SIZE) - 1) * PAGE_GROUP_SIZE

  return (
    <PaginationBox>
      {!isInFirstPageGroup && (
        <button type='button' onClick={() => setCurrentPage(startPage - 1)}>
          <img src={arrowLeft} alt='Previous' />
        </button>
      )}
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((number) => (
        <Link to={`/list/index?page=${number}&sort=${selectedItem}`} key={number}>
          <PageButton key={number} $clicked={number === currentPage} onClick={() => setCurrentPage(number)}>
            {number}
          </PageButton>
        </Link>
      ))}
      {!isInLastPageGroup && (
        <button type='button' onClick={() => setCurrentPage(startPage + PAGE_GROUP_SIZE)}>
          <img src={arrowRight} alt='Next' />
        </button>
      )}
    </PaginationBox>
  )
}

export default Pagination
