import React from 'react'
import { Icon, Text, ReplyStyledButton } from './styledButton'
import ARROW_BROWN_IMG from '../../../assets/icon/arrow-right-brown.svg'

export const ReplyButton = ({ children, buttonOff }) => {
  return (
    <ReplyStyledButton disabled={buttonOff}>
      <Icon src={ARROW_BROWN_IMG} />
      <Text>{children}</Text>
      <Icon src={ARROW_BROWN_IMG} />
    </ReplyStyledButton>
  )
}
