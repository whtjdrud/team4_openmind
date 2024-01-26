import React, { useEffect, useState } from 'react'
import { Text } from '../../atomicComponents/FeedCard/styledCard'
import { PageLayout, QuestionsList, QuestionCount, BubbleImg, NotYet, BoxImg } from './StyledAnswerPage'
import FeedCards from '../../atomicComponents/FeedCard'
import Bubble from '../../../assets/images/Messages.svg'
import EmptyBox from '../../../assets/images/Frame 70.svg'
import AnswerPageHeader from './AnswerPageHeader'
import { getSubject } from '../../../api/AnswerApi'

export const AnswerPageComponent = ({ id }) => {
  const [profileImage, setProfileImage] = useState('')
  const [questionCounts, setQuestionCounts] = useState(0)
  const [profileName, setProfileName] = useState('')
  useEffect(() => {
    const fetchProfileData = async () => {
      const subjectData = await getSubject(id)
      if (subjectData) {
        setProfileImage(subjectData.imageSource)
        setQuestionCounts(subjectData.questionCount)
        setProfileName(subjectData.name)
      }
    }
    fetchProfileData()
  }, [id])

  return (
    <PageLayout>
      <AnswerPageHeader $backgroundImageUrl={profileImage} profileName={profileName} />
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
          <FeedCards id={id} isAskPage={false} setQuestionCounts={setQuestionCounts} />
        </QuestionsList>
      )}
    </PageLayout>
  )
}
