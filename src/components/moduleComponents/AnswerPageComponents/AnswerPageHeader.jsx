import ShareBtn from '../../atomicComponents/Share'
import { Head, HeadImage, LogoBox, LogoContainer, LogoItem, ProfileContainer, ProfileImage } from './StyledAnswerPage'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/mainLogo.svg'
import { Text } from '../../atomicComponents/FeedCard/styledCard'

const AnswerPageHeader = ({ $backgroundImageUrl, profileName }) => {
  return (
    <>
      <Head>
        <HeadImage />
      </Head>
      <LogoContainer>
        <Link to='/'>
          <LogoBox>
            <LogoItem src={Logo} />
          </LogoBox>
        </Link>
      </LogoContainer>
      <ProfileContainer>
        <ProfileImage $backgroundImageUrl={$backgroundImageUrl} />
        <Text>{profileName}</Text>
        <ShareBtn />
      </ProfileContainer>
    </>
  )
}
export default AnswerPageHeader
