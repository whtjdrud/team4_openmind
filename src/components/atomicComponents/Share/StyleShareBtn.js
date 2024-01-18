import styled from 'styled-components'

export const ShareBtnDiv = styled.div`
  width: 150px;
  height: 40px;
  background-color: var(--Grayscale20, #f9f9f9);
  display: flex;
  justify-content: space-between;
`
export const ShareImg = styled.img`
  padding: 10px 10px;
  border-radius: 50%;
  cursor: pointer;
`
export const ShareLinkImg = styled(ShareImg)`
  background-color: var(--Brown40, #542f1a);
`
export const ShareFaceBookImg = styled(ShareImg)`
  background-color: var(--Blue50, #1877f2);
`
export const ShareKakaoImg = styled(ShareImg)`
  background-color: var(--Yellow50, #fee500);
`
