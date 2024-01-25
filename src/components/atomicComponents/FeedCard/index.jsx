import React, { useEffect, useState } from 'react'
import { CardLayout } from './styledCard'
import IconsComponent from './Icons'
import QuestionComponent from './Question'
import ReplyComponent from './Reply'
import ButtonsComponent from './Buttons'
import FeedCardEmpty from '../FeedCardEmpty'
import { fetchQuestions } from '../../../api/AnswerApi'

const FeedCard = ({ question, id, like, dislike, answer, isAskPage }) => {
  return (
    <CardLayout>
      <IconsComponent isAnswered={!!answer} answerId={answer?.id} />
      <QuestionComponent question={question} />
      {isAskPage && answer && <ReplyComponent answer={answer.content} />}
      {isAskPage || (answer ? <ReplyComponent answer={answer.content} /> : <FeedCardEmpty questionId={id} />)}
      <ButtonsComponent like={like} dislike={dislike} questionId={id} />
      {isAskPage && answer && <ReplyComponent answer={answer.content} />}
    </CardLayout>
  )
}

const FeedCards = ({ id, isAskPage }) => {
  const [feeds, setFeeds] = useState([])
  const fetchAndSetQuestions = async () => {
    const questionsData = await fetchQuestions(id)
    setFeeds(questionsData.results)
  }
  useEffect(() => {
    fetchAndSetQuestions()
  }, [id])

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
        />
      ))}
    </>
  )
}

export default FeedCards
