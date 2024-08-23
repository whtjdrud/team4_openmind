import React, { useEffect, useState } from 'react'
import { fetchQuestions, fetchUserData } from '../../../api/AnswerApi'
import { deleteQuestion } from '../../../api/QuestionApi'
import Dropdown from './Dropdown'
import FeedCard from './index'

const LIMIT = 6

const FeedCardList = ({ name, imageSource, id, isAskPage, setQuestionCounts }) => {
  const [feeds, setFeeds] = useState([
    {
      answer: null,
      content: null,
      createdAt: null,
      dislike: 0,
      id: 1,
      like: 0,
      subjectedId: 0,
    },
  ])
  const [order, setOrder] = useState('createdAt')
  const [filter, setFilter] = useState('')
  const [offset, setOffset] = useState(0)

  const sortedItems =
    order === '질문순'
      ? feeds.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      : feeds.sort((a, b) => b[order] - a[order])

  const filteredItems = filter === '미답변' ? feeds.filter((feed) => !feed.answer) : feeds.filter((feed) => feed.answer)

  const fetchAndSetQuestions = async (options) => {
    const { results } = await fetchQuestions(options)
    if (options.offset === 0) {
      setFeeds(results)
    } else {
      setFeeds([...feeds, ...results])
    }
    setOffset(options.offset + results.length)
  }

  useEffect(() => {
    fetchAndSetQuestions({ id, offset: 0, limit: LIMIT })
    // 버튼으로 order값을 바꿔줄때 마다 useEffect를 실행시켜주기 위해
    // dependency array에 order를 추가해줍니다.
  }, [id, order])

  const handleLoadMore = () => {
    fetchAndSetQuestions({ id, offset, limit: LIMIT })
  }

  const handleDeleteQuestion = async (questionId) => {
    await deleteQuestion(questionId)
    setFeeds((prevFeeds) => prevFeeds.filter((feed) => feed.id !== questionId))
    setQuestionCounts((prevCounts) => prevCounts - 1)
  }

  console.log(feeds)

  return (
    <>
      <Dropdown setFilter={setFilter} setOrder={setOrder} order={order} filter={filter} />
      {/* filter 값이 있으면 필터된 피드 카드가 나열되고 filter값이 없으면 정렬된 피드 카드가 나열됩니다. */}
      {filter
        ? filteredItems.map((feed) => (
            <FeedCard
              key={feed.id}
              feedData={feed}
              isAskPage={isAskPage}
              replyingUserName={name}
              replyingUserImage={imageSource}
              handleDeleteQuestion={handleDeleteQuestion}
            />
          ))
        : sortedItems.map((feed) => (
            <FeedCard
              key={feed.id}
              feedData={feed}
              isAskPage={isAskPage}
              replyingUserName={name}
              replyingUserImage={imageSource}
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
