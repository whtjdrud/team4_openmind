import { TextArea } from './textArea'

const FeedCardEmpty = ({ questionId, onDataFromChild }) => {
  return <TextArea questionId={questionId} onDataFromTextArea={onDataFromChild} />
}

export default FeedCardEmpty
