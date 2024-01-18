import styled from 'styled-components'
import iconSpriteImage from '../../assets/images/css_sprites.png'


// 사용 방법
// export { 쓸 아이콘 변수명 } from '위치/IconStyles'
export const IconSprite = styled.div`
  width: 24px;
  height: 24px;
  background: url(${iconSpriteImage});
`
export const MoreIcon = styled(IconSprite)`
  background-position: -10px -10px;
`

export const ThumbsDownIcon = styled(IconSprite)`
  background-position: -54px -10px;
`

export const ThumbsUpIcon = styled(IconSprite)`
  background-position: -10px -54px;
`

export const MessageIcon = styled(IconSprite)`
  background-position: -54px -54px;
`

export const ArrowUpIcon = styled(IconSprite)`
  background-position: -98px -10px;
`

export const ArrowDownIcon = styled(IconSprite)`
  background-position: -98px -54px;
`

export const ArrowLeftIcon = styled(IconSprite)`
  background-position: -10px -98px;
`

export const ArrowRightIcon = styled(IconSprite)`
  background-position: -54px -98px;
`

export const LinkIcon = styled(IconSprite)`
  background-position: -98px -98px;
`

export const KakaotalkIcon = styled(IconSprite)`
  background-position: -142px -10px;
`

export const FacebookIcon = styled(IconSprite)`
  background-position: -142px -54px;
`

export const ArrowRightStraightIcon = styled(IconSprite)`
  background-position: -142px -98px;
`

export const CloseIcon = styled(IconSprite)`
  background-position: -10px -142px;
`

export const EditIcon = styled(IconSprite)`
  background-position: -54px -142px;
`

export const PersonIcon = styled(IconSprite)`
  background-position: -98px -142px;
`

export const RejectionIcon = styled(IconSprite)`
  background-position: -142px -142px;
`
