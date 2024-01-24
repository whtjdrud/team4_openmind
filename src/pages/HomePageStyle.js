import styled from 'styled-components'
import HomeBackImg from '../assets/images/HomeBackImg.png'

export const MainPageDiv = styled.div`
  width: 100vw;
  height: 100vh; // viewport 높이로 설정
  background-image: url(${HomeBackImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (max-width: 767px) {
    background-image: none;
    background-color: var(--Grayscale-20, #f9f9f9);
  }
`

export const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  gap: 5rem;
  @media only screen and (max-width: 767px) {
    padding-top: 4rem;
    gap: 3rem;
  }
`

export const ButtonDiv = styled.div`
  width: 100%;
  padding-right: 20rem;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 767px) {
    justify-content: center;
    padding-right: 0;
    order: 2;
  }
`

export const LogoImg = styled.img`
  width: 46rem;
  padding-top: 4rem;
  @media only screen and (max-width: 767px) {
    width: 25rem;
    order: 1;
  }
`

export const InputBox = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
// form 태그로 바꾸기
export const Inputdiv = styled.div`
  width: 40rem;
  height: 23rem;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  background-color: var(--Grayscale-10, #fff);
  border-radius: 1.6rem;
  @media only screen and (max-width: 767px) {
    width: 30rem;
    height: 22rem;
    padding: 2.4rem;
    order: 3;
  }
`

export const LoginText = styled.p`
  width: 100%;
  height: 4.59rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`

export const MobileImgDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MobileImg = styled.img`
  display: none;
  @media only screen and (max-width: 767px) {
    display: block;
    width: 37.5rem;
    height: 17rem;
  }
`
