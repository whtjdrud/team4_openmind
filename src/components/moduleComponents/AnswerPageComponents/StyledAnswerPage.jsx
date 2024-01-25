import styled from 'styled-components'
import HeadImg from '../../../assets/images/HomeBackImg.png'
import { Text } from '../../atomicComponents/FeedCard/styledCard'

export const PageLayout = styled.div`
  width: 100%;
  height: 2215px;
  background: var(--Grayscale-20, #f9f9f9);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`
export const QuestionsList = styled.div`
  display: inline-flex;
  padding: 16px;
  margin-top: 20rem;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid var(--Brown-30, #c7bbb5);
  background: var(--Brown-10, #f5f1ee);
`
export const QuestionCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  ${Text} {
    color: var(--Brown-40, #542f1a);
    font-size: 2rem;
    line-height: 2.5rem;
  }
`
export const Head = styled.div`
  width: 100%;
  height: 234px;
  flex-shrink: 0;
  background-color: #fff;
`
export const HeadImage = styled.div`
  width: 100%;
  height: 234px;
  flex-shrink: 0;
  background-image: url(${HeadImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 68%;
  background-color: lightgray;
  mix-blend-mode: hard-light;
`
export const LogoContainer = styled.div`
  display: flex;
  width: 170px;
  height: 67px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  top: 5rem;
`
export const LogoBox = styled.div`
  display: flex;
  width: 170px;
  height: 67px;
  padding-right: 0.271px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`
export const LogoItem = styled.img`
  width: 169.729px;
  height: 85.663px;
  flex-shrink: 0;
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 136px;
  height: 136px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  top: 18rem;

  ${Text} {
    font-size: 3.2rem;
    line-height: 4rem;
`
export const ProfileImage = styled.div`
  width: 136px;
  height: 136px;
  flex-shrink: 0;
  border-radius: 136px;
  background-image: url(${(props) => props.$backgroundImageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  }
`
export const BubbleImg = styled.img`
  width: 24px;
  height: 24px;
`
export const NotYet = styled.div`
  display: flex;
  width: 716px;
  height: 330px;
  padding: 16px 24px;
  margin-top: 20rem;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid var(--Brown-20, #e4d5c9);
  background: var(--Brown-10, #f5f1ee);
  position: relative;

  ${Text} {
    color: var(--Brown-40, #542f1a);
    font-size: 2rem;
    line-height: 2.5rem;
  }
`
export const BoxImg = styled.img`
  width: 150px;
  height: 154px;
  flex-shrink: 0;
  position: absolute;
  top: 33%;
  left: 40%;
`
