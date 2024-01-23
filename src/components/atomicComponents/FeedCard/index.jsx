import React, { useEffect, useState } from 'react'
import { CardLayout } from './styledCard'
import IconsComponent from './Icons'
import QuestionComponent from './Question'
import ReplyComponent from './Reply'
import ButtonsComponent from './Buttons'
import FeedCardEmpty from '../FeedCardEmpty'

const FeedCard = ({ question, id, like, dislike, answer, isAskPage }) => {
  const [isAnswered, setIsAnswered] = useState(false)
  return (
    <CardLayout>
      <IconsComponent isAnswered={isAnswered} answerId={answer && answer.id} />
      <QuestionComponent question={question} />
      {isAskPage && answer && <ReplyComponent answer={answer.content} />}
      {isAskPage || (answer ? <ReplyComponent answer={answer.content} /> : <FeedCardEmpty questionId={id} />)}
      <ButtonsComponent like={like} dislike={dislike} />
    </CardLayout>
  )
}

const FeedCards = ({ id, isAskPage }) => {
  const [feeds, setFeeds] = useState([])
  const API_BASE_URL = 'https://openmind-api.vercel.app/3-4/subjects/'

  const getQuestions = async (subjectId) => {
    const question = await fetch(`${API_BASE_URL}${id ? `${subjectId}/questions/` : ''}`)
    return question.json()
  }

  const getQuestionFnc = async (value) => {
    const { results } = await getQuestions(value)
    console.log(getQuestions(value))
    // console.log(results)
    setFeeds(results)
  }

  useEffect(() => {
    getQuestionFnc(id)
  }, [])

  return feeds.map((feed) => (
    <FeedCard
      key={feed.id}
      id={feed.id}
      answer={feed.answer}
      question={feed.content}
      like={feed.like}
      dislike={feed.dislike}
      isAskPage={isAskPage}
    />
  ))
}

FeedCards.defaultProps = {
  isAskPage: false,
}

export default FeedCards
