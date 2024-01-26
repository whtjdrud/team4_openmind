import styled from 'styled-components'
import HomeBackImg from '../../../assets/images/HomeBackImg.png'
import { Link } from 'react-router-dom'

// Pc : 1200px 이상
// Tablet : 768px~1199px
// Mobile : 375px~767p

export const MainPageDiv = styled.div`
  width: 100%;
  height: 100vh; // viewport 높이로 설정
  background-image: url(${HomeBackImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (max-width: 1199px) {
    background-image: none;
    background-color: var(--Grayscale-20, #f9f9f9);
  }

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
  height: 4rem;
  padding-right: 20rem;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 1199px) {
    padding-right: 5rem;
  }

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
    padding-top: 0;
    width: 25rem;
    order: 1;
  }
`

export const InputBox = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Inputdiv = styled.form`
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

export const AnswerButtonLink = styled(Link)`
  display: flex;
  flex-direction: column;
`

export const LoginText = styled.p`
  width: 100%;
  height: 4.59rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`

export const ResponsiveImgDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResponsiveImg = styled.img`
  display: none;

  @media only screen and (max-width: 1199px) {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 767px) {
    display: block;
    width: 100%;
    height: 100%;
  }
`