import React, { useEffect, useState } from 'react'
import { CardLayout } from './styledCard'
import IconsComponent from './Icons'
import QuestionComponent from './Question'
import ReplyComponent from './Reply'
import ButtonsComponent from './Buttons'
import FeedCardEmpty from '../FeedCardEmpty'
import { fetchQuestions } from '../../../api/AnswerApi'

const FeedCard = ({ question, id, like, dislike, answer, isAskPage, replyingUserImage, replyingUserName }) => {
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
          <FeedCardEmpty questionId={id} />
        ))}
      <ButtonsComponent like={like} dislike={dislike} />
      {isAskPage && answer && <ReplyComponent answer={answer.content} />}
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
  const API_BASE_URL = 'https://openmind-api.vercel.app/3-4/subjects/'
  const getUserData = async (localId) => {
    const data = await fetch(`${API_BASE_URL}${id && `${localId}`}/`)
    return data.json()
  }
  const replyingUserId = localStorage.getItem('userId')
  const getUserDataFnc = async (localId) => {
    const { name, imageSource } = await getUserData(localId)
    setReplyingUserName(name)
    setReplyingUserImage(imageSource)
  }
  useEffect(() => {
    fetchAndSetQuestions()
    getUserDataFnc(replyingUserId)
  }, [])

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
        />
      ))}
    </>
  )
}

FeedCards.defaultProps = {
  isAskPage: false,
}

export default FeedCards
