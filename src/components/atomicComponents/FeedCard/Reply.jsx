import React from 'react'
import { ReplyContainer, ProfileBox, ProfileImg, UserBox, NameItem, NameFrag, UserName, Time, Text } from './styledCard'
import CAT from '../../../assets/images/Ellipse 1.svg'

const ReplyComponent = ({ image, name, repliedAt }) => {
  return (
    <ReplyContainer>
      <ProfileBox>
        {/* 프사 API에서 받아와서 바꿔줘야함 */}
        <ProfileImg src={image} />
      </ProfileBox>
      <UserBox>
        <NameItem>
          <NameFrag>
            {/* 닉네임 받아오기 */}
            <UserName>{name}</UserName>
            {/* 시간 받아오기 */}
            <Time>{repliedAt}주전</Time>
          </NameFrag>
        </NameItem>
        {/* 답변 받아오기 */}
        <Text>
          그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며,
          이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상,
          인생의 만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다. 이상은
          들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은
          피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는 봄바람을 방황하여도, 우리의
          것은 작고 아니한 영원히 듣기만 운다.
        </Text>
      </UserBox>
    </ReplyContainer>
  )
}

ReplyComponent.defaultProps = {
  image: `${CAT}`,
  name: '아초는 고양이',
  repliedAt: '2',
}

export default ReplyComponent
