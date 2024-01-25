import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../../atomicComponents/FeedCard/styledCard'
import {
  PageLayout,
  QuestionsList,
  QuestionCount,
  Head,
  HeadImage,
  LogoContainer,
  LogoBox,
  LogoItem,
  ProfileContainer,
  ProfileImage,
  BubbleImg,
  NotYet,
  BoxImg,
} from './styledAskPage'
import ShareBtn from '../../atomicComponents/Share'
import FeedCards from '../../atomicComponents/FeedCard'
import Logo from '../../../assets/images/mainLogo.svg'
import CAT from '../../../assets/images/Ellipse 1.svg'
import Bubble from '../../../assets/images/Messages.svg'
import EmptyBox from '../../../assets/images/Frame 70.svg'
import FloatingBtn from '../../atomicComponents/Floating'
import QuestionModal from '../../atomicComponents/QuestionModal'

export const AskPageComponent = ({ id }) => {
  const [profileImage, setProfileImage] = useState(`${CAT}`)
  const [profileName, setProfileName] = useState('아초는 고양이')
  const [questionCounts, setQuestionCounts] = useState(0)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const openModal = () => {
    setIsOpenModal(true)
  }
  const closeModal = () => {
    setIsOpenModal(false)
  }
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
        <Link to='/'>
          <LogoBox>
            <LogoItem src={Logo} />
          </LogoBox>
        </Link>
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
      <FloatingBtn onClick={openModal} />
      {isOpenModal && <QuestionModal closeModal={closeModal} image={profileImage} name={profileName} id={id} />}
    </PageLayout>
  )
}
