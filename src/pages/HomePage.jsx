import { MainPageDiv, MobileImgDiv, MobileImg } from '../components/moduleComponents/LoginToggleLogic/HomePageStyle'
import HomeBackImg from '../assets/images/HomeBackImg.png'
import LoginHeader from '../components/moduleComponents/LoginHeader/index'
import LoginMain from '../components/moduleComponents/LoginMain/index'
import LoginToggleLogic from '../components/moduleComponents/LoginToggleLogic/index'

const HomePage = () => {
  const { isLoggedIn, inputValue, userStorageId, setInputValue, handleLoginToggle } = LoginToggleLogic()
  return (
    <MainPageDiv>
      <LoginHeader userStorageId={userStorageId} />
      <LoginMain
        isLoggedIn={isLoggedIn}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onClick={handleLoginToggle}
        userStorageId={userStorageId}
      />
      <MobileImgDiv>
        <MobileImg src={HomeBackImg} alt='HomeBackImg' />
      </MobileImgDiv>
    </MainPageDiv>
  )
}

export default HomePage
