import React from 'react'
import { Box, UserLayout, Profile, Text, ProfileImage, QuestionLayout, Question, SpeechBubble } from './StyledComponent'
import MESSAGE_IMG from '../../../assets/images/Message.svg'
import CAT from '../../../assets/images/Ellipse 1.svg'
import { Link } from 'react-router-dom'
import MOKOKO_IMG from '../../../assets/images/01_모코코콘1_09_방긋.png'

export const UserCard = ({
  userImageUrl = `${CAT}`,
  userName = '아초는 고양이',
  messageCount = '999+',
  id,
  localId,
}) => {
  return (
    <Link to={Number(localId) === id ? `/post/${id}/answer` : `/post/${id}`}>
      <Box>
        <img className='MOKOKO' alt='선택' src={MOKOKO_IMG} />
        <UserLayout>
          <Profile>
            <ProfileImage src={userImageUrl} />
            <Text>{userName}</Text>
          </Profile>
        </UserLayout>
        <QuestionLayout>
          <Question>
            <SpeechBubble src={MESSAGE_IMG} />
            <Text>받은 질문</Text>
          </Question>
          <Text>{messageCount}개</Text>
        </QuestionLayout>
      </Box>
    </Link>
  )
}
