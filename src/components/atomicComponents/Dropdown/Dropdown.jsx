import { useState } from 'react'
import { Button, Div, DropdownMenu } from './StyledDropdown'
import { ReactComponent as ArrowUp } from '../../../assets/images/ArrowUp.svg'
import { ReactComponent as ArrowDown } from '../../../assets/images/ArrowDown.svg'

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
        <p>{selectedItem === 'name' ? '이름순' : '최신순'}</p>
        <p>{isDropdownOpen ? <ArrowUp /> : <ArrowDown />}</p>
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
