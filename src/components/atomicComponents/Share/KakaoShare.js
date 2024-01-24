import mainLogo from '../../../assets/images/mainLogo.svg'

const KakaoShare = () => {
  if (!window.Kakao.isInitialized()) {
    const key = process.env.REACT_APP_JAVASCRIPT_KEY
    window.Kakao.init(key)
  }

  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: 'openMind',
      description: '#openMind #지식공유 #소통해요 #열린마음 #커뮤니티 #친구모집',
      imageUrl: mainLogo,
      link: {
        mobileWebUrl: 'http://localhost:3000',
        webUrl: 'http://localhost:3000',
      },
    },
  })
}

export default KakaoShare
