import { useState } from 'react'
import { Button, Div, DropdownMenu } from './StyledDropdown'
import ArrowUp from '../../../assets/images/ArrowUp.svg'
import ArrowDown from '../../../assets/images/ArrowDown.svg'
import { Link } from 'react-router-dom'

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
        <img src={isDropdownOpen ? ArrowUp : ArrowDown} alt='화살표 이미지' />
      </Button>

      {isDropdownOpen && (
        <Div>
          <Link to='/list/index?page=1&sort=name'>
            <DropdownMenu onClick={() => handleItemClick('name')}>이름순</DropdownMenu>
          </Link>
          <Link to='/list/index?page=1&sort=time'>
            <DropdownMenu onClick={() => handleItemClick('time')}>최신순</DropdownMenu>
          </Link>
        </Div>
      )}
    </div>
  )
}

export default Dropdown
