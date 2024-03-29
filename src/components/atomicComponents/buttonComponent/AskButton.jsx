import React from 'react'
import { Icon, Text, AskStyledButton } from './styledButton'
import ARROW_WHITE_IMG from '../../../assets/images/arrow-right-white.svg'

export const AskButton = ({ children, buttonOff, onClick }) => {
  return (
    <AskStyledButton onClick={onClick} disabled={buttonOff}>
      <Text>{children}</Text>
      <Icon src={ARROW_WHITE_IMG} />
    </AskStyledButton>
  )
}
