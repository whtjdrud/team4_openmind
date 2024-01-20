import styled from 'styled-components'
import HomeBackImg from '../assets/images/HomeBackImg.png'

export const MainPageDiv = styled.body`
  width: 100%;
  height: 100vh; // viewport 높이로 설정
  background-image: url(${HomeBackImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (max-width: 767px) {
    background-size: 37.5rem auto;
  }
`
export const HeaderDiv = styled.div`
  width: 100%;
  height: 20rem;
  padding-right: 20rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  width: 46rem;
  @media only screen and (max-width: 767px) {
    width: 25rem;
  }
`
export const Inputdiv = styled.div`
  width: 40rem;
  height: 17.2rem;
  margin-top: 3rem;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  background-color: var(--Grayscale-10, #fff);
  border-radius: 1.6rem;
  @media only screen and (max-width: 767px) {
    width: 30rem;
    height: 15rem;
    padding: 2.4rem;
  }
`
// Mobile : 375px~767px
