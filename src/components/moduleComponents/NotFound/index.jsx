import { useNavigate } from 'react-router-dom'
import MOKOKO from '../../../assets/images/01_모코코콘1_08_물음표.png'
import { StyledNotFound } from './StyledNotFound'

const NotFound = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleGoHome = () => {
    navigate('/')
  }
  return (
    <StyledNotFound>
      <img src={MOKOKO} alt='?' />
      <h2>페이지를 찾을 수 없습니다.</h2>
      <p>
        찾으시려는 페이지의 주소가 잘못 입력되었거나, 페이지 주소의 변경 혹은 삭제로 인해 현재 사용하실 수 없습니다.
        입력하신 페이지의 주소가 정확한지 다시 한번 확인 해 주시길 부탁 드립니다.
      </p>
      <div className='button-box'>
        <button type='button' onClick={handleGoBack}>
          이전 페이지
        </button>
        <button type='button' onClick={handleGoHome}>
          메인으로 가기
        </button>
      </div>
    </StyledNotFound>
  )
}

export default NotFound
