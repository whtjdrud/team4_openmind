import styled from 'styled-components'
import HomeBackImg from '../assets/images/HomeBackImg.png'

export const MainPageDiv = styled.body`
  width: 100vw;
  height: 100vh; // viewport 높이로 설정
  background-image: url(${HomeBackImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (max-width: 767px) {
    // position: relative;
  }
`
export const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  gap: 5rem;
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
  @media only screen and (max-width: 767px) {
    width: 25rem;
    order: 1;
  }
`
export const Inputdiv = styled.div`
  width: 40rem;
  height: 17.2rem;
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
    order: 3;
  }
`
