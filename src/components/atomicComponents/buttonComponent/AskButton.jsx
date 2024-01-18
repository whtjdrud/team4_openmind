import React from 'react'
import { Icon, Text, AskStyledButton } from './styledButton'
import ARROW_WHITE_IMG from '../../../assets/icon/arrow-right-white.svg'

export const AskButton = ({ children, buttonOff }) => {
  return (
    <AskStyledButton disabled={buttonOff}>
      <Icon src={ARROW_WHITE_IMG} />
      <Text>{children}</Text>
      <Icon src={ARROW_WHITE_IMG} />
    </AskStyledButton>
  )
}
