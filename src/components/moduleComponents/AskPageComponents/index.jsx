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
import FeedCardList from '../../atomicComponents/FeedCard/FeedCardList'
import Logo from '../../../assets/images/mainLogo.svg'
import Bubble from '../../../assets/images/Messages.svg'
import EmptyBox from '../../../assets/images/Frame 70.svg'
import FloatingBtn from '../../atomicComponents/Floating'
import QuestionModal from '../../atomicComponents/QuestionModal'
import ProfileSkeletonComponent from '../../atomicComponents/Skeleton/ProfileSkeletonComponent'
import { fetchQuestions } from '../../../api/AnswerApi'

const LIMIT = 6

export const AskPageComponent = ({ id }) => {
  const [profileState, setProfileState] = useState({
    profileImage: '',
    profileName: '',
  })
  const [questionCounts, setQuestionCounts] = useState(0)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [feeds, setFeeds] = useState([])
  const [order, setOrder] = useState('createdAt')
  const [filter, setFilter] = useState('')
  const [offset, setOffset] = useState(0)

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
    setQuestionCounts(questionCount)
    setProfileState({ profileImage: imageSource, profileName: name })
  }

  const fetchAndSetQuestions = async (options) => {
    const { results } = await fetchQuestions(options)
    if (options.offset === 0) {
      setFeeds(results)
    } else {
      setFeeds([...feeds, ...results])
    }
    setOffset(options.offset + results.length)
  }

  useEffect(() => {
    getSubjectProfile()
    fetchAndSetQuestions({ id, offset: 0, limit: LIMIT })

    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [id, order])

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
      {loading ? (
        <ProfileSkeletonComponent />
      ) : (
        <ProfileContainer>
          <ProfileImage backgroundImageUrl={profileState.profileImage} />
          <Text>{profileState.profileName}</Text>
          <ShareBtn />
        </ProfileContainer>
      )}
      {loading ? (
        ''
      ) : questionCounts === 0 ? (
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
          <FeedCardList
            feeds={feeds}
            setFeeds={setFeeds}
            offset={offset}
            setOffset={setOffset}
            order={order}
            setOrder={setOrder}
            filter={filter}
            setFilter={setFilter}
            profileState={profileState}
            id={id}
            isAskPage
          />
        </QuestionsList>
      )}

      <FloatingBtn onClick={openModal} />
      {isOpenModal && (
        <QuestionModal
          closeModal={closeModal}
          image={profileState.profileImage}
          name={profileState.profileName}
          id={id}
        />
      )}
    </PageLayout>
  )
}
