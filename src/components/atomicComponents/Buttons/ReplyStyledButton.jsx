import React from 'react'
import { Icon, Text, ReplyStyledButton } from './styledButton'
import ARROW_BROWN_IMG from '../../../assets/Icon/arrow-right-brown.svg'

export const ReplyButton = ({ children, isDisabled = false }) => {
  return (
    <ReplyStyledButton disabled={isDisabled}>
      <Icon src={ARROW_BROWN_IMG} />
      <Text>{children}</Text>
      <Icon src={ARROW_BROWN_IMG} />
    </ReplyStyledButton>
  )
}
