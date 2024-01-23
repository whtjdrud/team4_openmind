import styled from 'styled-components'

export const StyledListTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 47px;
  margin-bottom: 30px;
  gap: 12px;
  @media only screen and (max-width: 376px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
  }
`

export const Title = styled.h2`
  color: var(--Grayscale-60, #000);
  text-align: center;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 40px;
  font-weight: 400;
  line-height: normal;
  @media only screen and (max-width: 376px) {
    font-size: 24px;
    line-height: 30px;
  }
`
