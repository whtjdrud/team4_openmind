import styled from 'styled-components'
import HomeBackImg from '../assets/images/HomeBackImg.png'

export const MainPageDiv = styled.body`
  width: 100%;
  height: 100vh; // viewport 높이로 설정
  background-color: var(--Grayscale-20, #f9f9f9);
  background-image: url(${HomeBackImg});
  background-size: cover;
`
export const HeaderDiv = styled.div`
  width: 100%;
  // height: 200px;
  height: 20rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 200px;
`
export const MainDiv = styled.div`
  width: 100%;
`
export const LogoImgDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LogoImg = styled.img`
  width: 460px;
`
export const Inputdiv = styled.div`
  width: 400px;
  height: 172px;
  padding: 32px;
  background-color: var(--Grayscale-10, #fff);
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
`
