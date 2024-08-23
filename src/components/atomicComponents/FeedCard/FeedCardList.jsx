import { fetchQuestions } from '../../../api/AnswerApi'
import { deleteQuestion } from '../../../api/QuestionApi'
import Dropdown from './Dropdown'
import FeedCard from './index'

const LIMIT = 6

const FeedCardList = ({
  feeds,
  setFeeds,
  profileState,
  feedState,
  setFeedState,
  isAskPage,
  setQuestionCounts,
  handleLoadMore,
}) => {
  const sortedItems =
    feedState.order === '질문순'
      ? feeds.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      : feeds.sort((a, b) => b[feedState.order] - a[feedState.order])

  const filteredItems =
    feedState.filter === '미답변' ? feeds.filter((feed) => !feed.answer) : feeds.filter((feed) => feed.answer)

  const handleDeleteQuestion = async (questionId) => {
    await deleteQuestion(questionId)
    setFeeds((prevFeeds) => prevFeeds.filter((feed) => feed.id !== questionId))
    setQuestionCounts((prevCounts) => prevCounts - 1)
  }

  return (
    <>
      <Dropdown setFeedState={setFeedState} feedState={feedState} />
      {/* filter 값이 있으면 필터된 피드 카드가 나열되고 filter값이 없으면 정렬된 피드 카드가 나열됩니다. */}
      {feedState.filter
        ? filteredItems.map((feed) => (
            <FeedCard
              key={feed.id}
              feedData={feed}
              isAskPage={isAskPage}
              profileState={profileState}
              handleDeleteQuestion={handleDeleteQuestion}
            />
          ))
        : sortedItems.map((feed) => (
            <FeedCard
              key={feed.id}
              feedData={feed}
              isAskPage={isAskPage}
              profileState={profileState}
              handleDeleteQuestion={handleDeleteQuestion}
            />
          ))}
      <button type='button' onClick={handleLoadMore}>
        더보기
      </button>
    </>
  )
}

FeedCardList.defaultProps = {
  isAskPage: false,
}

export default FeedCardList
