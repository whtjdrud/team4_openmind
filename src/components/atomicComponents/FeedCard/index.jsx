import React, { useEffect, useState } from 'react'
import { CardLayout } from './styledCard'
import IconsComponent from './Icons'
import QuestionComponent from './Question'
import ReplyComponent from './Reply'
import ButtonsComponent from './Buttons'
import { TextArea } from '../FeedCardEmpty/textArea'
import { fetchQuestions, fetchUserData } from '../../../api/AnswerApi'

const FeedCard = ({
  onDataFromFeedCard,
  question,
  id,
  like,
  dislike,
  answer,
  isAskPage,
  replyingUserImage,
  replyingUserName,
}) => {
  return (
    <CardLayout>
      <IconsComponent isAnswered={!!answer} answerId={answer?.id} />
      <QuestionComponent question={question} />
      {isAskPage && answer && (
        <ReplyComponent image={replyingUserImage} name={replyingUserName} answer={answer.content} />
      )}
      {isAskPage ||
        (answer ? (
          <ReplyComponent image={replyingUserImage} name={replyingUserName} answer={answer.content} />
        ) : (
          <TextArea questionId={id} onDataFromTextArea={onDataFromFeedCard} />
        ))}
      <ButtonsComponent like={like} dislike={dislike} />
    </CardLayout>
  )
}

const FeedCards = ({ id, isAskPage }) => {
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
          replyingUserName={replyingUserName}
          replyingUserImage={replyingUserImage}
          onDataFromFeedCard={handleFeedCardState}
        />
      ))}
    </>
  )
}

FeedCards.defaultProps = {
  isAskPage: false,
}

export default FeedCards
