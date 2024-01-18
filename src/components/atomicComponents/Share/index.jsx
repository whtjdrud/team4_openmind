import { ShareBtnDiv, ShareLinkImg, ShareFaceBookImg, ShareKakaoImg } from './StyleShareBtn'
import LinkSvg from '../../../assets/images/whitelink.svg'
import FacebookSvg from '../../../assets/images/whitefacebook.svg'
import KakaotalkSvg from '../../../assets/images/Kakaotalk.svg'

const ShareBtn = () => {
  return (
    <ShareBtnDiv>
      <ShareLinkImg src={LinkSvg} alt='link' />
      <ShareFaceBookImg src={FacebookSvg} alt='facebook' />
      <ShareKakaoImg src={KakaotalkSvg} alt='kakao' />
    </ShareBtnDiv>
  )
}

export default ShareBtn
