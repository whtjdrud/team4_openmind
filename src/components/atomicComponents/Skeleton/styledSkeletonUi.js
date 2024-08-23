import styled, { keyframes } from 'styled-components'

// Shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

// Wrapper for the skeleton elements
export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 136px;
  height: 250px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  top: 12rem;
`

// Circular skeleton profile with shimmer effect
export const SkeletonProfile = styled.div`
  width: 136px;
  height: 136px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(90deg, #e5e5e5 25%, #d4d4d4 60%, #e5e5e5 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`

// Rectangular skeleton text placeholder with shimmer effect
export const SkeletonText = styled.div`
  width: 83px;
  height: 40px;
  background: linear-gradient(90deg, #e5e5e5 25%, #d4d4d4 60%, #e5e5e5 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`

export const SkeletonShared = styled.div`
  width: 150px;
  height: 40px;
  background: linear-gradient(90deg, #e5e5e5 25%, #d4d4d4 60%, #e5e5e5 75%);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`
