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
import { getSubject, fetchQuestions } from '../../../api/AnswerApi'

const LIMIT = 6

export const AskPageComponent = ({ id }) => {
  const [profileState, setProfileState] = useState({
    profileImage: '',
    profileName: '',
  })
  const [feedState, setFeedState] = useState({
    order: '질문순',
    filter: '',
    offset: '',
  })
  const [questionCounts, setQuestionCounts] = useState(0)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [feeds, setFeeds] = useState([])

  const openModal = () => {
    setIsOpenModal(true)
  }
  const closeModal = () => {
    setIsOpenModal(false)
  }

  const getSubjectProfile = async () => {
    const { imageSource, questionCount, name } = await getSubject(id)
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
    setFeedState((prev) => ({ ...prev, offset: options.offset + results.length }))
  }

  const handleLoadMore = () => {
    const { offset } = feedState
    fetchAndSetQuestions({ id, offset, limit: LIMIT })
  }

  useEffect(() => {
    getSubjectProfile()
    fetchAndSetQuestions({ id, offset: 0, limit: LIMIT })

    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [id, feedState.order])

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
            feedState={feedState}
            setFeedState={setFeedState}
            profileState={profileState}
            id={id}
            handleLoadMore={handleLoadMore}
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
