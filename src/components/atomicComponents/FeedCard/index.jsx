import React, { useEffect, useState } from 'react'
import { CardLayout, FooterCard, Header } from './styledCard'
import QuestionComponent from './Question'
import ReplyComponent from './Reply'
import ButtonsComponent from './Buttons'
import { TextArea } from '../FeedCardEmpty/textArea'
import { fetchQuestions, fetchUserData } from '../../../api/AnswerApi'
import { deleteQuestion } from '../../../api/QuestionApi'
import AnswerKebab from './AnswerKebab'
import ButtonEdit from '../ButtonEdit/buttonEdit'
import AnsweredBadge from '../ButtonBadge/AnsweredBadge'
import UnansweredBadge from '../ButtonBadge/UnansweredBadge'

const LIMIT = 3

const FeedCard = ({
  question,
  id,
  like,
  dislike,
  initAnswer,
  isAskPage,
  replyingUserImage,
  replyingUserName,
  handleDeleteQuestion,
  createdAt,
}) => {
  const [isModify, setIsModify] = useState(false)
  const [answer, setAnswer] = useState(initAnswer)
  const handleModifyClick = () => {
    setIsModify(!isModify)
  }

  const renderAnswerComponent = () => {
    if (isAskPage) {
      return undefined
    }
    if (answer) {
      if (isModify) {
        return (
          <TextArea
            questionId={id}
            value={answer?.content}
            isModify={isModify}
            answerId={answer.id}
            setAnswer={setAnswer}
            setIsModify={setIsModify}
          />
        )
      }
      return (
        <ReplyComponent
          image={replyingUserImage}
          name={replyingUserName}
          answer={answer?.content}
          repliedAt={answer?.createdAt}
          isRejected={answer?.isRejected}
        />
      )
    }
    return <TextArea questionId={id} setAnswer={setAnswer} />
  }

  return (
    <CardLayout>
      <Header>
        {answer ? <AnsweredBadge /> : <UnansweredBadge />}
        {!isAskPage && (
          <AnswerKebab
            answerId={answer?.id}
            questionId={id}
            isRejected={answer?.isRejected}
            handleDeleteQuestion={handleDeleteQuestion}
            setIsModify={setIsModify}
            setAnswer={setAnswer}
          />
        )}
      </Header>

      <QuestionComponent askAt={createdAt} question={question} />

      {/* 질문하기페이지 답이 있을 경우 */}
      {isAskPage && answer && (
        <ReplyComponent
          image={replyingUserImage}
          name={replyingUserName}
          answer={answer?.content}
          repliedAt={answer?.createdAt}
          isRejected={answer?.isRejected}
        />
      )}

      {renderAnswerComponent()}
      <FooterCard>
        <ButtonsComponent like={like} dislike={dislike} questionId={id} />
        {!isAskPage && answer && !answer?.isRejected && <ButtonEdit onClick={handleModifyClick} isModify={isModify} />}
      </FooterCard>
    </CardLayout>
  )
}
const FeedCards = ({ id, isAskPage, setQuestionCounts }) => {
  const [feeds, setFeeds] = useState([])
  const [offset, setOffset] = useState(0)
  const [replyingUserImage, setReplyingUserImage] = useState('')
  const [replyingUserName, setReplyingUserName] = useState('')

  const fetchAndSetQuestions = async (options) => {
    const questionsData = await fetchQuestions(options)
    if (options.offset === 0) {
      setFeeds(questionsData.results)
    } else {
      setFeeds([...feeds, ...questionsData.results])
    }
    setOffset(options.offset + feeds.length)
  }

  const fetchAndSetUserData = async () => {
    const { name, imageSource } = await fetchUserData(id)
    setReplyingUserName(name)
    setReplyingUserImage(imageSource)
  }

  useEffect(() => {
    fetchAndSetQuestions({ id, offset: 0, limit: LIMIT })
    fetchAndSetUserData()
  }, [id])

  const handleLoadMore = () => {
    fetchAndSetQuestions({ id, offset, limit: LIMIT })
  }

  const handleDeleteQuestion = async (questionId) => {
    await deleteQuestion(questionId)
    setFeeds((prevFeeds) => prevFeeds.filter((feed) => feed.id !== questionId))
    setQuestionCounts((prevCounts) => prevCounts - 1)
  }
  const handleLatestData = () => {
    const sortItems = (items) => items.sort((a, b) => a[id] - b[id])
    setFeeds(sortItems(feeds))
  }
  const handleEarliestData = () => {
    const sortItems = (items) => items.sort((a, b) => b[id] - a[id])
    setFeeds(sortItems(feeds))
  }
  const handleAnsweredData = () => {
    const filterItems = (items) => items.filter((answer) => answer.length !== 0)
    setFeeds(filterItems(feeds))
  }
  const handleNonansweredData = () => {
    const filterItems = (items) => items.filter((answer) => answer.length === 0)
    setFeeds(filterItems(feeds))
  }
  return (
    <>
      <button type='button' onClick={handleLatestData}>
        최신순
      </button>
      <button type='button' onClick={handleEarliestData}>
        오래된순
      </button>
      <button type='button' onClick={handleAnsweredData}>
        답변완료
      </button>
      <button type='button' onClick={handleNonansweredData}>
        미답변
      </button>
      <button type='button' onClick={handleLoadMore}>
        더보기
      </button>
      {feeds.map((feed) => (
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
    </>
  )
}

FeedCards.defaultProps = {
  isAskPage: false,
}

export default FeedCards
