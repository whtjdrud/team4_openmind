const KakaoShare = (url) => {
  if (!window.Kakao.isInitialized()) {
    const key = process.env.REACT_APP_JAVASCRIPT_KEY
    window.Kakao.init(key)
  }

  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: 'openMind',
      description: '#openMind #지식공유 #소통해요 #열린마음 #커뮤니티 #친구모집',
      imageUrl:
        'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbE0AdB%2FbtsDW9qmIRy%2FMrUAV7zrpnKKgAHPbzkOd1%2Fimg.png',
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
  })
}

export default KakaoShare
