import { Button, Ul } from './StyledKebabMenuList'

const KeBabMenuList = ({ data }) => {
  const [questionId, answerId, isRejected, handleDeleteQuestion, handleDeleteAnswer, handleRejectAnswer] = data

  const list = [
    {
      key: 1,
      value: '답변 거절',
      type: 'reject',
      handler: () => {
        handleRejectAnswer(questionId)
      },
    },
    {
      key: 2,
      value: '답변 삭제',
      type: 'delete',
      handler: () => {
        handleDeleteAnswer(answerId)
      },
    },
    {
      key: 3,
      value: '질문 삭제',
      type: 'delete',
      handler: () => {
        handleDeleteQuestion(questionId)
      },
    },
  ]

  return (
    <Ul type='more'>
      {list.map((item) => {
        if (item.key === 1 && answerId !== undefined) return null
        if (item.key === 2 && (typeof answerId !== 'number' || isRejected)) return null
        return (
          <li key={item.key}>
            <Button $actionType={item.type} onClick={item.handler}>
              {item.value}
            </Button>
          </li>
        )
      })}
    </Ul>
  )
}

export default KeBabMenuList
