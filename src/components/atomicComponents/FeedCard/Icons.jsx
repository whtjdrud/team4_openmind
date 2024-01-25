import React, { useState, useEffect } from 'react'
import { Icons, Badge, Text, More, BadgeWaited, OptionsContainer, Button } from './styledCard'
import MORE_IMG from '../../../assets/images/More.svg'

const API_BASE_URL = 'https://openmind-api.vercel.app/3-4/'

const Options = ({ answerId }) => {
  const handleSubmit = async () => {
    const deleteRequest = await fetch(`${API_BASE_URL}answers/${answerId}/`, {
      method: 'DELETE',
    })
    console.log(deleteRequest.status)
  }

  return (
    <OptionsContainer onSubmit={handleSubmit}>
      <Button type='submit'>답변삭제</Button>
    </OptionsContainer>
  )
}

const IconsComponent = ({ isAnswered, answerId }) => {
  const [more, setMore] = useState(false)
  useEffect(() => {
    setMore(false)
  }, [])
  const handleClick = () => {
    setMore(!more)
  }
  return (
    <Icons>
      {isAnswered ? (
        <Badge>
          <Text>답변완료</Text>
        </Badge>
      ) : (
        <BadgeWaited>
          <Text>미답변</Text>
        </BadgeWaited>
      )}

      <More src={MORE_IMG} onClick={handleClick} />
      {more && <Options answerId={answerId} />}
    </Icons>
  )
}

export default IconsComponent
