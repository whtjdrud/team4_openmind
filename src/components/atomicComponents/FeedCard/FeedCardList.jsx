import { deleteQuestion } from '../../../api/QuestionApi'
import Dropdown from './Dropdown'
import EmptyBox from '../../../assets/images/Frame 70.svg'
import { BoxImg } from '../../moduleComponents/AskPageComponents/styledAskPage'
import { NotYet } from '../../moduleComponents/AnswerPageComponents/StyledAnswerPage'
import FeedCard from './index'
import { useEffect } from 'react'

const FeedCardList = ({
  feeds,
  setFeeds,
  profileState,
  feedState,
  setFeedState,
  isAskPage,
  setQuestionCounts,
  questionCounts,
  handleLoadMore,
  disabled,
}) => {
  const filteredItems = (() => {
    if (feedState.option === '최신순') {
      return feeds.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }

    if (feedState.option === '질문순') {
      return feeds.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    }

    if (feedState.option === '미답변') {
      return feeds.filter((feed) => !feed.answer)
    }

    if (feedState.option === '답변완료') {
      return feeds.filter((feed) => feed.answer)
    }

    return []
  })()

  const handleDeleteQuestion = async (questionId) => {
    await deleteQuestion(questionId)
    setFeeds((prevFeeds) => prevFeeds.filter((feed) => feed.id !== questionId))
    setQuestionCounts((prevCounts) => prevCounts - 1)
  }

  useEffect(() => {
    setQuestionCounts((prev) => ({ ...prev, current: filteredItems.length }))
  }, [feedState.option])

  return (
    <>
      <Dropdown setFeedState={setFeedState} feedState={feedState} />
      {/* filter 값이 있으면 필터된 피드 카드가 나열되고 filter값이 없으면 정렬된 피드 카드가 나열됩니다. */}
      {questionCounts.current === 0 && (
        <NotYet>
          <BoxImg src={EmptyBox} />
        </NotYet>
      )}
      {questionCounts.current !== 0 &&
        filteredItems.map((feed) => (
          <FeedCard
            key={feed.id}
            feedData={feed}
            isAskPage={isAskPage}
            profileState={profileState}
            handleDeleteQuestion={handleDeleteQuestion}
          />
        ))}
      {questionCounts !== 0 && (
        <button disabled={disabled} type='button' onClick={handleLoadMore}>
          더보기
        </button>
      )}
    </>
  )
}

FeedCardList.defaultProps = {
  isAskPage: false,
}

export default FeedCardList
