import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../../atomicComponents/FeedCard/styledCard'
import {
  PageLayout,
  Head,
  HeadImage,
  LogoContainer,
  LogoBox,
  LogoItem,
  ProfileContainer,
  ProfileImage,
  QuestionsList,
  QuestionCount,
} from './StyledAnswerPage'
import FeedCardList from '../../atomicComponents/FeedCard/FeedCardList'
import Logo from '../../../assets/images/mainLogo.svg'
import ShareBtn from '../../atomicComponents/Share'
import { getSubject, fetchQuestions } from '../../../api/AnswerApi'
import ProfileSkeletonComponent from '../../atomicComponents/Skeleton/ProfileSkeletonComponent'
import Toast from '../../atomicComponents/Toast'

const LIMIT = 6

export const AnswerPageComponent = ({ id }) => {
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

  const fetchProfileData = async () => {
    const { imageSource, questionCount, name } = await getSubject(id)

    setQuestionCounts((prev) => ({ ...prev, total: questionCount }))
    setProfileState({ profileImage: imageSource, profileName: name })
  }

  const handleLoadMore = () => {
    const { offset } = feedState
    fetchAndSetQuestions({ id, offset, limit: LIMIT })
  }

  useEffect(() => {
    const profilePromise = fetchProfileData()
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
            isAskPage={false}
            disabled={isToast}
          />
        </QuestionsList>
      )}

      {isToast && <Toast text='질문을 모두 가져왔습니다.' />}
    </PageLayout>
  )
}
