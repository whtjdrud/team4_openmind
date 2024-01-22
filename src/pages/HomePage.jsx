import FeedCards from '../components/atomicComponents/FeedCard'
import FeedCardAnswer from '../components/atomicComponents/FeedCardQuestion'

const HomePage = () => {
  return (
    <div>
      <h1>홈페이지</h1>
      <FeedCards />
      <FeedCardAnswer />
    </div>
  )
}

export default HomePage
