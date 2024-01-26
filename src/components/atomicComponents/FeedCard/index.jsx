import React, { useEffect, useState } from 'react'
import { CardLayout, Header } from './styledCard'
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

const FeedCard = ({
  question,
  id,
  like,
  dislike,
  answer,
  isAskPage,
  replyingUserImage,
  replyingUserName,
  onDataFromFeedCard,
  handleDeleteQuestion,
  createdAt,
}) => {
  const [isModify, setIsModify] = useState(false)
  const handleModifyClick = () => {
    setIsModify(!isModify)
  }

  const renderAnswerComponent = () => {
    if (isAskPage) {
      return undefined
    }
    if (answer) {
      if (isModify) {
        return <TextArea questionId={id} onDataFromTextArea={onDataFromFeedCard} value={answer?.content} />
      }
      return (
        <ReplyComponent
          image={replyingUserImage}
          name={replyingUserName}
          answer={answer?.content}
          repliedAt={answer?.createdAt}
        />
      )
    }
    return <TextArea questionId={id} onDataFromTextArea={onDataFromFeedCard} />
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
          />
        )}
      </Header>

      <QuestionComponent askAt={createdAt} question={question} />
      <ButtonsComponent like={like} dislike={dislike} />

      {/* 질문하기페이지 답이 있을 경우 */}
      {isAskPage && answer && (
        <ReplyComponent
          image={replyingUserImage}
          name={replyingUserName}
          answer={answer?.content}
          repliedAt={answer?.createdAt}
        />
      )}

      {renderAnswerComponent()}

      {!isAskPage && answer && !answer?.isRejected && <ButtonEdit onClick={handleModifyClick} isModify={isModify} />}
    </CardLayout>
  )
}
const FeedCards = ({ id, isAskPage, setQuestionCounts }) => {
  const [feeds, setFeeds] = useState([])
  const [replyingUserImage, setReplyingUserImage] = useState('')
  const [replyingUserName, setReplyingUserName] = useState('')

  const fetchAndSetQuestions = async () => {
    const questionsData = await fetchQuestions(id)
    setFeeds(questionsData.results)
  }

  const fetchAndSetUserData = async () => {
    const { name, imageSource } = await fetchUserData(id)
    setReplyingUserName(name)
    setReplyingUserImage(imageSource)
  }
  useEffect(() => {
    fetchAndSetQuestions()
    fetchAndSetUserData()
  }, [])
  const handleFeedCardState = () => {
    fetchAndSetQuestions()
  }

  const handleDeleteQuestion = async (questionId) => {
    await deleteQuestion(questionId)
    setFeeds((prevFeeds) => prevFeeds.filter((feed) => feed.id !== questionId))
    setQuestionCounts((prevCounts) => prevCounts - 1)
  }
  return (
    <>
      {feeds.map((feed) => (
        <FeedCard
          key={feed.id}
          id={feed.id}
          answer={feed.answer}
          question={feed.content}
          like={feed.like}
          dislike={feed.dislike}
          isAskPage={isAskPage}
          createdAt={feed.createdAt}
          replyingUserName={replyingUserName}
          replyingUserImage={replyingUserImage}
          onDataFromFeedCard={handleFeedCardState}
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
