import React from 'react'
import { Box, UserLayout, Profile, Text, ProfileImage, QuestionLayout, Question, SpeechBubble } from './StyledComponent'
import MESSAGE_IMG from '../../../assets/img/Message.svg'
import CAT from '../../../assets/img/Ellipse 1.svg'

export const UserCard = ({ userImageUrl = `${CAT}`, userName = '아초는 고양이', messageCount = '999+' }) => {
  return (
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
  )
}
