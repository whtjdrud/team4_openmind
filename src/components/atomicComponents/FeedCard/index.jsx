import React, { useEffect, useState } from 'react'
import { CardLayout } from './styledCard'
import IconsComponent from './Icons'
import QuestionComponent from './Question'
import ReplyComponent from './Reply'
import ButtonsComponent from './Buttons'

const FeedCard = () => {
  const [isAnswered, setIsAnswered] = useState(false)
  const BASE_URL = 'https://openmind-api.vercel.app/3-4/subjects/'

  const getQuestions = async (id) => {
    const question = await fetch(BASE_URL)
    return question.json()
  }

  const getQuestionFnc = async (id) => {
    const { name } = getQuestions(id)
    console.log(name)
    console.log(getQuestions())
  }

  useEffect(() => {
    getQuestionFnc()
  }, [])

  return (
    <CardLayout>
      <IconsComponent isAsnwered={isAnswered} />
      <QuestionComponent />
      <ReplyComponent />
      <ButtonsComponent />
      {/* <QuestionComponent time={data.createdAt} question={data.content} />
      <ReplyComponent image={data.id} name={data.id} repliedAt={data.answer.createAt} />
      <ButtonsComponent count={data.like} /> */}
    </CardLayout>
  )
}

export default FeedCard
