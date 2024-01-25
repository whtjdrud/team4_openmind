import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CardLayout, ProfileImg, ProfileBox, Text, UserName } from '../FeedCard/styledCard'
import ButtonsComponent from '../FeedCard/Buttons'
import { TextArea } from './textArea'
import CAT from '../../../assets/images/Ellipse 1.svg'

const SubjectUserContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`
const SubjectProfileBox = styled(ProfileBox)`
  width: 28px;
  height: 28px;
`
const SubjectProfileImg = styled(ProfileImg)`
  width: 28px;
  height: 28px;
`

const FeedCardAnswer = ({ image, name, id }) => {
  const [isAnswered, setIsAnswered] = useState(false)

  return (
    <>
      <SubjectUserContainer>
        <Text>To.</Text>
        <SubjectProfileBox>
          {/* 프사 API에서 받아와서 바꿔줘야함 */}
          <SubjectProfileImg src={image} />
        </SubjectProfileBox>
        <UserName>{name}</UserName>
      </SubjectUserContainer>
      <TextArea id={id} />
    </>
  )
}

FeedCardAnswer.defaultProps = {
  image: `${CAT}`,
  name: '아초는 고양이',
}

export default FeedCardAnswer
