import { ShareBtnDiv, ShareLinkImg, ShareFaceBookImg, ShareKakaoImg } from './StyleShareBtn'
import React, { useState } from 'react'
import LinkSvg from '../../../assets/images/whitelink.svg'
import FacebookSvg from '../../../assets/images/whitefacebook.svg'
import KakaotalkSvg from '../../../assets/images/Kakaotalk.svg'
import Toast from '../Toast'
import KakaoShare from './KakaoShare'
import { useParams } from 'react-router-dom'

const ShareBtn = () => {
  const [isToast, setIsToast] = useState(false) // 토스트 메시지를 보여줄지 말지 결정하는 state
  const Params = useParams()
  const url = `${window.location.origin}/post/${Params.id}`

  const shareToFacebook = () => {
    const sharedLink = encodeURIComponent(url)
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`, '_blank')
  }

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsToast(!isToast)
      setTimeout(() => {
        setIsToast(false)
      }, 5000)
    } catch (err) {
      console.log(err)
    }
  }

  const handleShareKakao = () => {
    KakaoShare(url)
  }

  return (
    <>
      <ShareBtnDiv>
        <ShareLinkImg
          src={LinkSvg}
          alt='link'
          onClick={() => {
            handleCopyClipBoard(url)
          }}
        />
        <ShareFaceBookImg src={FacebookSvg} alt='facebook' onClick={shareToFacebook} />
        <ShareKakaoImg src={KakaotalkSvg} alt='kakao' onClick={handleShareKakao} />
      </ShareBtnDiv>
      <div>{isToast && <Toast />}</div>
    </>
  )
}

export default ShareBtn
