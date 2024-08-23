import React, { useState } from 'react'
import { CardLayout, FooterCard, Header } from './styledCard'
import QuestionComponent from './Question'
import ReplyComponent from './Reply'
import ButtonsComponent from './Buttons'
import { TextArea } from '../FeedCardEmpty/textArea'
import AnswerKebab from './AnswerKebab'
import ButtonEdit from '../ButtonEdit/buttonEdit'
import AnsweredBadge from '../ButtonBadge/AnsweredBadge'
import UnansweredBadge from '../ButtonBadge/UnansweredBadge'

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

export default FeedCard
