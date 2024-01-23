import React from 'react'
import { Box, UserLayout, Profile, Text, ProfileImage, QuestionLayout, Question, SpeechBubble } from './StyledComponent'
import MESSAGE_IMG from '../../../assets/images/Message.svg'
import CAT from '../../../assets/images/Ellipse 1.svg'
import { Link } from 'react-router-dom'

export const UserCard = ({ userImageUrl = `${CAT}`, userName = '아초는 고양이', messageCount = '999+', id }) => {
  return (
    <Link to={`/post/${id}`}>
      <Box>
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
