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
  BubbleImg,
  NotYet,
  BoxImg,
} from './StyledAnswerPage'
import FeedCardList from '../../atomicComponents/FeedCard/FeedCardList'
import Bubble from '../../../assets/images/Messages.svg'
import EmptyBox from '../../../assets/images/Frame 70.svg'
import Logo from '../../../assets/images/mainLogo.svg'
import ShareBtn from '../../atomicComponents/Share'
import { getSubject, fetchQuestions } from '../../../api/AnswerApi'
import ProfileSkeletonComponent from '../../atomicComponents/Skeleton/ProfileSkeletonComponent'

const LIMIT = 6

export const AnswerPageComponent = ({ id }) => {
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
  const [loading, setLoading] = useState(true)
  const [feeds, setFeeds] = useState([])

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
    const fetchProfileData = async () => {
      const { imageSource, questionCount, name } = await getSubject(id)

      setQuestionCounts(questionCount)
      setProfileState({ profileImage: imageSource, profileName: name })
    }
    fetchProfileData()
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
            isAskPage={false}
            setQuestionCounts={setQuestionCounts}
          />
        </QuestionsList>
      )}
    </PageLayout>
  )
}
