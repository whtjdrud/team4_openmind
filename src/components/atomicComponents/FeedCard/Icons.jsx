import React from 'react'
import { Icons, Badge, Text, More, BadgeWaited } from './styledCard'
import MORE_IMG from '../../../assets/images/More.svg'

const IconsComponent = ({ isAnswered }) => {
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

      <More src={MORE_IMG} />
    </Icons>
  )
}

export default IconsComponent
