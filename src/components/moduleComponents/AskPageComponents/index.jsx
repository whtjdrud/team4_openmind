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
} from './styledAskPage'
import ShareBtn from '../../atomicComponents/Share'
import FeedCardList from '../../atomicComponents/FeedCard/FeedCardList'
import Logo from '../../../assets/images/mainLogo.svg'
import FloatingBtn from '../../atomicComponents/Floating'
import QuestionModal from '../../atomicComponents/QuestionModal'
import ProfileSkeletonComponent from '../../atomicComponents/Skeleton/ProfileSkeletonComponent'
import { getSubject, fetchQuestions } from '../../../api/AnswerApi'
import Toast from '../../atomicComponents/Toast'

const LIMIT = 6

export const AskPageComponent = ({ id }) => {
  const [profileState, setProfileState] = useState({
    profileImage: '',
    profileName: '',
  })
  const [feedState, setFeedState] = useState({
    option: '질문순',
    offset: '',
  })
  const [questionCounts, setQuestionCounts] = useState({
    total: 0,
    current: 0,
  })
  const [loading, setLoading] = useState(true)
  const [feeds, setFeeds] = useState([])
  const [isToast, setIsToast] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => {
    setIsOpenModal(true)
  }
  const closeModal = () => {
    setIsOpenModal(false)
  }

  const getSubjectProfile = async () => {
    const { imageSource, questionCount, name } = await getSubject(id)
    setQuestionCounts((prev) => ({ ...prev, total: questionCount }))
    setProfileState({ profileImage: imageSource, profileName: name })
  }

  const fetchAndSetQuestions = async (options) => {
    const { results } = await fetchQuestions(options)
    if (options.offset === 0) {
      setFeeds(results)
    } else {
      setFeeds([...feeds, ...results])
      if (feedState.option === '질문순') {
        if (results.length) {
          window.scrollTo(0, 150)
        }
      }
      if (!results.length) {
        setIsToast(true)
        setTimeout(() => {
          setIsToast(false)
        }, 5000)
      }
    }
    setFeedState((prev) => ({ ...prev, offset: options.offset + results.length }))
  }

  const handleLoadMore = () => {
    const { offset } = feedState
    fetchAndSetQuestions({ id, offset, limit: LIMIT })
  }

  useEffect(() => {
    const profilePromise = getSubjectProfile()
    const questionPromise = fetchAndSetQuestions({ id, offset: 0, limit: LIMIT })

    Promise.all([profilePromise, questionPromise]).then(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 600)

      return () => clearTimeout(timer)
    })
  }, [id])

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
      {loading || (
        <QuestionsList>
          <QuestionCount>
            <Text>{questionCounts.total}개의 질문이 있습니다.</Text>
          </QuestionCount>
          <FeedCardList
            id={id}
            feeds={feeds}
            setFeeds={setFeeds}
            feedState={feedState}
            setFeedState={setFeedState}
            profileState={profileState}
            setQuestionCounts={setQuestionCounts}
            handleLoadMore={handleLoadMore}
            questionCounts={questionCounts}
            isAskPage
            disabled={isToast}
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
      {isToast && <Toast text='질문을 모두 가져왔습니다.' />}
    </PageLayout>
  )
}
