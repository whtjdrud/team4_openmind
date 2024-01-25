import { useState } from 'react'
import { Button, Div, DropdownMenu } from './StyledDropdown'
import ArrowUp from '../../../assets/images/ArrowUp.svg'
import ArrowDown from '../../../assets/images/ArrowDown.svg'

const Dropdown = ({ setSelectedItem, selectedItem }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const handleItemClick = (item) => {
    setSelectedItem(item)
    setDropdownOpen(false) // 항목을 클릭하면 드롭다운을 닫습니다.
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  return (
    <div>
      <Button onClick={toggleDropdown} isOpen={isDropdownOpen}>
        <p>{(selectedItem && selectedItem) || '이름순'}</p>
        <img src={isDropdownOpen ? ArrowUp : ArrowDown} alt='화살표 이미지' />
      </Button>

      {isDropdownOpen && (
        <Div>
          <DropdownMenu onClick={() => handleItemClick('name')}>이름순</DropdownMenu>
          <DropdownMenu onClick={() => handleItemClick('time')}>최신순</DropdownMenu>
        </Div>
      )}
    </div>
  )
}

export default Dropdown
