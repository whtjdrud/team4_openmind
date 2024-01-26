import styled from 'styled-components'

export const StyledModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 612px;
  height: 454px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  border: none;
  background: var(--Grayscale10, #fff);
  box-shadow: var(--shoadow-large, 0px 16px 20px 0px rgba(48, 48, 48, 0.62));

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .title-box {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 43px;
    color: var(--Grayscale60, #000);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
  }

  .user-information-box {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    color: var(--Grayscale60, #000);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;

    .user-img {
      width: 28px;
      height: 28px;
    }
  }
`

export const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.56);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
