import Dropdown from '../../atomicComponents/Dropdown/Dropdown'
import { StyledListTitleBox, Title } from './StyledListTitle'

const ListTitle = ({ setSelectedItem, selectedItem }) => {
  return (
    <StyledListTitleBox>
      <Title>누구에게 질문할까요?</Title>
      <Dropdown selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
    </StyledListTitleBox>
  )
}

export default ListTitle
