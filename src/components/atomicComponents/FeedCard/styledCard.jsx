import styled from 'styled-components'

export const CardLayout = styled.div`
  display: flex;
  width: 684px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 16px;
  background: var(--Grayscale-10, #fff);

  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);

  @media only screen and (max-width: 376px) {
    gap: 24px;
    padding: 24px;
  }
`
export const Text = styled.span`
  color: var(--Grayscale-60, #000);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 133.333%;
`
export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`
export const Badge = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--Brown-40, #542f1a);
  background: var(--Grayscale-10, #fff);

  ${Text} {
    color: var(--Brown-40, #542f1a);
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 128.571%;
  }
`
export const BadgeWaited = styled(Badge)`
  border-radius: 8px;
  border: 1px solid var(--Grayscale-40, #818181);

  ${Text} {
    color: var(--Grayscale-40, #818181);
    line-height: 1.8rem;
  }
`
export const More = styled.img`
  width: 26px;
  height: 26px;
`
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`
export const Time = styled.span`
  gap: 8px;
  color: var(--Grayscale-40, #818181);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 128.571%;
`
export const Question = styled(Text)`
  align-self: stretch;

  @media only screen and (max-width: 376px) {
    font-size: 1.6rem;
    line-height: 137.5%;
  }
`
export const ReplyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`
export const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
  flex-shrink: 0;

  @media only screen and (max-width: 376px) {
    width: 32px;
    height: 32px;
  }
`
export const ProfileBox = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 376px) {
    width: 32px;
    height: 32px;
  }
`
export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;

  ${Text} {
    align-self: stretch;
    font-family: Pretendard;
    font-size: 1.6rem;
    line-height: 137.5%;
  }
`
export const NameItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`
export const NameFrag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;

  ${Time} {
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-style: normal;
  }
`
export const UserName = styled(Text)`
@media only screen and (max-width: 376px) {
    font-size: 1.4rem
    line-height: 128.571%;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`
export const Line = styled.div`
  height: 1px;
  align-self: stretch;
  background: var(--Grayscale-30, #cfcfcf);
`
export const ButtonBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`
export const Thumb = styled.img`
  width: 16px;
  height: 16px;
  color: #818181;
`
export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  ${Text} {
    color: var(--Grayscale-40, #818181);
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 128.571%;
  }
`
