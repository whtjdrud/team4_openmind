import { SkeletonWrapper, SkeletonProfile, SkeletonText, SkeletonShared } from './styledSkeletonUi'

const ProfileSkeletonComponent = () => {
  return (
    <SkeletonWrapper>
      <SkeletonProfile />
      <SkeletonText />
      <SkeletonShared />
    </SkeletonWrapper>
  )
}

export default ProfileSkeletonComponent
