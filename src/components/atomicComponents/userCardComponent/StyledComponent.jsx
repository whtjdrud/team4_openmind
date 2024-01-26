import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid var(--Grayscale40, #818181);
  background: var(--Grayscale10, #fff);
  &:hover {
    border: none;
  }
`
const UserLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`
const Text = styled.span`
  color: var(--Grayscale60, #000);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;

  @media only screen and (max-width: 376px) {
    font-size: 1.8rem;
    line-height: 133.333%;
  }
`
const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
  border-radius: 60px;
  background-color: #d9d9d9;

  @media only screen and (max-width: 376px) {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 48px;
  }
`
const QuestionLayout = styled.div`
  display: flex;
  height: 22px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;

  ${Text} {
    color: var(--Grayscale40, #818181);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 137.5%;

    @media only screen and (max-width: 376px) {
      font-size: 1.4rem;
      line-height: 128.571%;
    }
  }
`
const Question = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
const SpeechBubble = styled.img`
  width: 18px;
  height: 18px;

  @media only screen and (max-width: 376px) {
    width: 16px;
    height: 16px;
  }
`

export { Box, UserLayout, Profile, Text, ProfileImage, QuestionLayout, Question, SpeechBubble }
