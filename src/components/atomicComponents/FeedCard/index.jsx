import React, { useState } from 'react'
import { CardLayout, FooterCard, Header } from './styledCard'
import QuestionComponent from './Question'
import ReplyComponent from './Reply'
import ButtonsComponent from './Buttons'
import AnswerKebab from './AnswerKebab'
import ButtonEdit from '../ButtonEdit/buttonEdit'
import AnsweredBadge from '../ButtonBadge/AnsweredBadge'
import UnansweredBadge from '../ButtonBadge/UnansweredBadge'
import AnswerCard from './AnswerCard'

const FeedCard = ({ feedData, isAskPage, replyingUserImage, replyingUserName, handleDeleteQuestion }) => {
  const { id, like, dislike, answer: initAnswer, content: question, createdAt } = feedData
  const [isModify, setIsModify] = useState(false)
  const [answer, setAnswer] = useState(initAnswer)
  const handleModifyClick = () => {
    setIsModify(!isModify)
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
      <AnswerCard
        isAskPage={isAskPage}
        answer={answer}
        isModify={isModify}
        id={id}
        setAnswer={setAnswer}
        setIsModify={setIsModify}
        replyingUserImage={replyingUserImage}
        replyingUserName={replyingUserName}
      />
      <FooterCard>
        <ButtonsComponent like={like} dislike={dislike} questionId={id} />
        {!isAskPage && answer && !answer?.isRejected && <ButtonEdit onClick={handleModifyClick} isModify={isModify} />}
      </FooterCard>
    </CardLayout>
  )
}

export default FeedCard
