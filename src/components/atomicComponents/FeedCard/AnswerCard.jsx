import { TextArea } from '../FeedCardEmpty/textArea'
import ReplyComponent from './Reply'

const AnswerCard = ({
  isAskPage,
  answer,
  isModify,
  id,
  setAnswer,
  setIsModify,
  replyingUserImage,
  replyingUserName,
}) => {
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

export default AnswerCard
