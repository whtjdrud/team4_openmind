import React, { useEffect, useState } from 'react'
import { CardLayout } from './styledCard'
import IconsComponent from './Icons'
import QuestionComponent from './Question'
import ReplyComponent from './Reply'
import ButtonsComponent from './Buttons'
import FeedCardReply from '../FeedCardReply'

const FeedCard = ({ question, id, like, dislike, answer }) => {
  const [isAnswered, setIsAnswered] = useState(false)
  return (
    <CardLayout>
      <IconsComponent isAsnwered={isAnswered} />
      <QuestionComponent question={question} />
      {answer === null ? <FeedCardReply questionId={id} /> : <ReplyComponent answer={answer.content} />}
      <ButtonsComponent like={like} dislike={dislike} />
    </CardLayout>
  )
}

const FeedCards = () => {
  const API_BASE_URL = 'https://openmind-api.vercel.app/3-4/subjects/'
  const [feeds, setFeeds] = useState([])

  const getQuestions = async (id) => {
    const question = await fetch(`${API_BASE_URL}${id ? `${id}/questions/` : ''}`)
    return question.json()
  }

  const getQuestionFnc = async (id) => {
    const { results } = await getQuestions(id)
    console.log(getQuestions(id))
    console.log(results)
    setFeeds(results)
  }

  useEffect(() => {
    getQuestionFnc(2400)
  }, [])

  return feeds.map((feed) => (
    <FeedCard
      key={feed.id}
      id={feed.id}
      answer={feed.answer}
      question={feed.content}
      like={feed.like}
      dislike={feed.dislike}
    />
  ))
}

export default FeedCards
