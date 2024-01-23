import React from 'react'
import { ReplyContainer, ProfileBox, ProfileImg, UserBox, NameItem, NameFrag, UserName, Time, Text } from './styledCard'
import CAT from '../../../assets/images/Ellipse 1.svg'

const ReplyComponent = ({ image, name, repliedAt, answer }) => {
  return (
    <ReplyContainer>
      <ProfileBox>
        {/* 프사 API에서 받아와서 바꿔줘야함 */}
        <ProfileImg src={image} />
      </ProfileBox>
      <UserBox>
        <NameItem>
          <NameFrag>
            {/* 닉네임 받아오기 */}
            <UserName>{name}</UserName>
            {/* 시간 받아오기 */}
            <Time>{repliedAt}주전</Time>
          </NameFrag>
        </NameItem>
        {/* 답변 받아오기 */}
        <Text>{answer}</Text>
      </UserBox>
    </ReplyContainer>
  )
}

ReplyComponent.defaultProps = {
  image: `${CAT}`,
  name: '아초는 고양이',
  repliedAt: '2',
}

export default ReplyComponent
