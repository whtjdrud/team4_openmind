import React, { useEffect, useState } from 'react'
import { fetchQuestions, fetchUserData } from '../../../api/AnswerApi'
import { deleteQuestion } from '../../../api/QuestionApi'
import Dropdown from './Dropdown'
import FeedCard from './index'

const LIMIT = 6

const FeedCardList = ({ id, isAskPage, setQuestionCounts }) => {
  const [feeds, setFeeds] = useState([])
  const [order, setOrder] = useState('createdAt')
  const [filter, setFilter] = useState('')
  const [offset, setOffset] = useState(0)
  const [replyingUserImage, setReplyingUserImage] = useState('')
  const [replyingUserName, setReplyingUserName] = useState('')

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

  const fetchAndSetUserData = async () => {
    const { name, imageSource } = await fetchUserData(id)
    setReplyingUserName(name)
    setReplyingUserImage(imageSource)
  }

  useEffect(() => {
    fetchAndSetQuestions({ id, offset: 0, limit: LIMIT })
    fetchAndSetUserData()
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

  return (
    <>
      <Dropdown setFilter={setFilter} setOrder={setOrder} order={order} filter={filter} />
      {/* filter 값이 있으면 필터된 피드 카드가 나열되고 filter값이 없으면 정렬된 피드 카드가 나열됩니다. */}
      {filter
        ? filteredItems.map((feed) => (
            <FeedCard
              key={feed.id}
              id={feed.id}
              initAnswer={feed.answer}
              question={feed.content}
              like={feed.like}
              dislike={feed.dislike}
              isAskPage={isAskPage}
              createdAt={feed.createdAt}
              replyingUserName={replyingUserName}
              replyingUserImage={replyingUserImage}
              handleDeleteQuestion={handleDeleteQuestion}
            />
          ))
        : sortedItems.map((feed) => (
            <FeedCard
              key={feed.id}
              id={feed.id}
              initAnswer={feed.answer}
              question={feed.content}
              like={feed.like}
              dislike={feed.dislike}
              isAskPage={isAskPage}
              createdAt={feed.createdAt}
              replyingUserName={replyingUserName}
              replyingUserImage={replyingUserImage}
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
