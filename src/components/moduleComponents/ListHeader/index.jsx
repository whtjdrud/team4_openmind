import { useEffect, useState } from 'react'
import StyledListHeader from './StyledListHeader'
import logo from '../../../assets/images/headerLogo.svg'
import { ReplyButton } from '../../atomicComponents/buttonComponent/ReplyButton'
import { Link } from 'react-router-dom'
import LocalProfile from '../../atomicComponents/LocalProfile'

const ListHeader = () => {
  const [localId, setLocalId] = useState('')
  const [userData, setUserData] = useState({})
  useEffect(() => {
    setLocalId(localStorage.getItem('userId'))
  }, [])
  useEffect(() => {
    async function getUserData() {
      const url = `https://openmind-api.vercel.app/3-4/subjects/${localId}/`

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    localId && getUserData()
  }, [localId])
  return (
    <StyledListHeader>
      <Link to='/'>
        <img className='logo-img' src={logo} alt='로고' />
      </Link>
      <div className='profile-box'>
        {localId && <LocalProfile userImg={userData.imageSource} userName={userData.name} />}
        <Link to={localId ? `/post/${localId}/answer` : '/'}>
          <ReplyButton>답변하러 가기</ReplyButton>
        </Link>
      </div>
    </StyledListHeader>
  )
}

export default ListHeader
