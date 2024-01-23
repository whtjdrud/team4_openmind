import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Text } from '../../atomicComponents/FeedCard/styledCard'
import ShareBtn from '../../atomicComponents/Share'
import FeedCards from '../../atomicComponents/FeedCard'
import HeadImg from '../../../assets/images/HomeBackImg.png'
import Logo from '../../../assets/images/mainLogo.svg'
import CAT from '../../../assets/images/Ellipse 1.svg'
import Bubble from '../../../assets/images/Messages.svg'
import EmptyBox from '../../../assets/images/Frame 70.svg'

export const PageLayout = styled.div`
  width: 100%;
  height: 2215px;
  background: var(--Grayscale-20, #f9f9f9);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`
export const QuestionsList = styled.div`
  display: inline-flex;
  padding: 16px;
  margin-top: 20rem;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid var(--Brown-30, #c7bbb5);
  background: var(--Brown-10, #f5f1ee);
`
export const QuestionCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  ${Text} {
    color: var(--Brown-40, #542f1a);
    font-size: 2rem;
    line-height: 2.5rem;
  }
`
const Head = styled.div`
  width: 100%;
  height: 234px;
  flex-shrink: 0;
  background-color: #fff;
`
const HeadImage = styled.div`
  width: 100%;
  height: 234px;
  flex-shrink: 0;
  background-image: url(${HeadImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 68%;
  background-color: lightgray;
  mix-blend-mode: hard-light;
`
const LogoContainer = styled.div`
  display: flex;
  width: 170px;
  height: 67px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  top: 5rem;
`
const LogoBox = styled.div`
  display: flex;
  width: 170px;
  height: 67px;
  padding-right: 0.271px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`
const LogoItem = styled.img`
  width: 169.729px;
  height: 85.663px;
  flex-shrink: 0;
`
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 136px;
  height: 136px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  top: 18rem;

  ${Text} {
    font-size: 3.2rem;
    line-height: 4rem;
`
const ProfileImage = styled.div`
  width: 136px;
  height: 136px;
  flex-shrink: 0;
  border-radius: 136px;
  background-image: ${({ backgroundImageUrl }) => `url(${backgroundImageUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  }
`
const BubbleImg = styled.img`
  width: 24px;
  height: 24px;
`
const NotYet = styled.div`
  display: flex;
  width: 716px;
  height: 330px;
  padding: 16px 24px;
  margin-top: 20rem;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid var(--Brown-20, #e4d5c9);
  background: var(--Brown-10, #f5f1ee);
  position: relative;

  ${Text} {
    color: var(--Brown-40, #542f1a);
    font-size: 2rem;
    line-height: 2.5rem;
  }
`
const BoxImg = styled.img`
  width: 150px;
  height: 154px;
  flex-shrink: 0;
  position: absolute;
  top: 33%;
  left: 40%;
`
export const AskPageComponent = ({ id }) => {
  const [profileImage, setProfileImage] = useState(`${CAT}`)
  const [questionCounts, setQuestionCounts] = useState(0)
  const [profileName, setProfileName] = useState('아초는 고양이')
  const API_BASE_URL = 'https://openmind-api.vercel.app/3-4/subjects/'
  const getSubject = async () => {
    const subject = await fetch(`${API_BASE_URL}${id}/`)
    return subject.json()
  }
  const getSubjectProfile = async () => {
    const { imageSource, questionCount, name } = await getSubject()
    setProfileImage(imageSource)
    setQuestionCounts(questionCount)
    setProfileName(name)
  }
  useEffect(() => {
    getSubjectProfile()
  }, [])

  return (
    <PageLayout>
      <Head>
        <HeadImage />
      </Head>
      <LogoContainer>
        <LogoBox>
          <LogoItem src={Logo} />
        </LogoBox>
      </LogoContainer>
      <ProfileContainer>
        <ProfileImage backgroundImageUrl={profileImage} />
        <Text>{profileName}</Text>
        <ShareBtn />
      </ProfileContainer>
      {questionCounts === 0 ? (
        <NotYet>
          <BubbleImg src={Bubble} />
          <Text>아직 질문이 없습니다.</Text>
          <BoxImg src={EmptyBox} />
        </NotYet>
      ) : (
        <QuestionsList>
          <QuestionCount>
            <Text>{questionCounts}개의 질문이 있습니다.</Text>
          </QuestionCount>
          <FeedCards id={id} isAskPage />
        </QuestionsList>
      )}
    </PageLayout>
  )
}
