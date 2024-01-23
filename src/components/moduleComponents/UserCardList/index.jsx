import { UserCard } from '../../atomicComponents/userCardComponent/UserCard'
import StyledUserCardList from './StyledUserCardList'

export const UserCardList = ({ userCards }) => {
  return (
    <StyledUserCardList>
      {userCards.length > 0 ? (
        userCards.map((card) => {
          return (
            <UserCard
              key={card.id}
              id={card.id}
              userName={card.name}
              messageCount={card.questionCount}
              userImageUrl={card.imageSource}
            />
          )
        })
      ) : (
        <div>저장된 질문이 없습니다</div>
      )}
    </StyledUserCardList>
  )
}
// 카드가 없을때 나오는 "저장된 질문이 없습니다"는 임시
