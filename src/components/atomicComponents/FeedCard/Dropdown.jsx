import { useState } from 'react'
import { Button, Container, DropdownMenu, Wrapper } from './StyledDropdown'
import ArrowUp from '../../../assets/images/ArrowUp.svg'
import ArrowDown from '../../../assets/images/ArrowDown.svg'

const Dropdown = ({ setFeedState, feedState }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownName, setDropdownName] = useState('최신순')

  const handleLatestData = () => {
    setFeedState((prev) => ({ ...prev, filter: '' }))
    // 필터를 ''처리 해줌으로써 filteredItems가 아닌 sortedItems가 렌더링 되게 해줍니다
    setFeedState((prev) => ({ ...prev, order: '질문순' }))
    setDropdownName('최신순')
    setDropdownOpen(false) // 항목을 클릭하면 드롭다운을 닫습니다.
  }

  const handleEarliestData = () => {
    setFeedState((prev) => ({ ...prev, filter: '' }))
    setFeedState((prev) => ({ ...prev, order: '질문순' }))
    setDropdownName('질문순')
    setDropdownOpen(false)
  }

  const handleAnsweredData = () => {
    setFeedState((prev) => ({ ...prev, filter: '답변완료' }))
    setDropdownName('답변완료')
    setDropdownOpen(false)
  }

  const handleNonansweredData = () => {
    setFeedState((prev) => ({ ...prev, filter: '미답변' }))
    setDropdownName('미답변')
    setDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  return (
    <Container>
      <Button onClick={toggleDropdown} isOpen={isDropdownOpen}>
        <span>{dropdownName}</span>
        <img src={isDropdownOpen ? ArrowUp : ArrowDown} alt='화살표 이미지' />
      </Button>

      {isDropdownOpen && (
        <Wrapper>
          <DropdownMenu onClick={handleLatestData}>최신순</DropdownMenu>
          <DropdownMenu onClick={handleEarliestData}>질문순</DropdownMenu>
          <DropdownMenu onClick={handleAnsweredData}>답변완료</DropdownMenu>
          <DropdownMenu onClick={handleNonansweredData}>미답변</DropdownMenu>
        </Wrapper>
      )}
    </Container>
  )
}

export default Dropdown
