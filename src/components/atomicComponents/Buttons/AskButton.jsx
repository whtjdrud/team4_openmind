import React from 'react'
import { Icon, Text, AskStyledButton } from './styledButton'
import ARROW_WHITE_IMG from '../../../assets/Icon/arrow-right-white.svg'

export const AskButton = ({ children, isDisabled = false }) => {
  return (
    <AskStyledButton disabled={isDisabled}>
      <Icon src={ARROW_WHITE_IMG} />
      <Text>{children}</Text>
      <Icon src={ARROW_WHITE_IMG} />
    </AskStyledButton>
  )
}
