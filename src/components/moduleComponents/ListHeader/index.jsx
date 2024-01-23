import StyledListHeader from './StyledListHeader'
import logo from '../../../assets/images/headerLogo.svg'
import { ReplyButton } from '../../atomicComponents/buttonComponent/ReplyButton'
import { Link } from 'react-router-dom'

const ListHeader = () => {
  return (
    <StyledListHeader>
      <Link to='/'>
        <img className='logo-img' src={logo} alt='로고' />
      </Link>
      <ReplyButton>답변하러 가기</ReplyButton>
    </StyledListHeader>
  )
}

export default ListHeader
