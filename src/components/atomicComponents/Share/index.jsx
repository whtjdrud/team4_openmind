import { ShareBtnDiv, ShareLinkImg, ShareFaceBookImg, ShareKakaoImg } from './StyleShareBtn'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import LinkSvg from '../../../assets/images/whitelink.svg'
import FacebookSvg from '../../../assets/images/whitefacebook.svg'
import KakaotalkSvg from '../../../assets/images/Kakaotalk.svg'
import Toast from '../Toast'

const ShareBtn = () => {
  const [isToast, setIsToast] = useState(false) // 토스트 메시지를 보여줄지 말지 결정하는 state
  const currentLocation = useLocation()
  console.log(currentLocation)

  const url = window.location.href
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

  return (
    <>
      <ShareBtnDiv>
        <ShareLinkImg
          src={LinkSvg}
          alt='link'
          onClick={() => {
            handleCopyClipBoard(`${currentLocation.pathname}`)
          }}
        />
        <ShareFaceBookImg src={FacebookSvg} alt='facebook' onClick={shareToFacebook} />
        <ShareKakaoImg src={KakaotalkSvg} alt='kakao' />
      </ShareBtnDiv>
      <div>{isToast && <Toast />}</div>
    </>
  )
}

export default ShareBtn

// 카카오톡 공유하기 기능은 웹페이지가 배포되어있는 상태여야 작동
// useLocation을 사용하여 현재 페이지의 url을 가져옴
// $handleCopyClipBoard(`{baseUrl}${currentLocation.pathname}`) 추가!
