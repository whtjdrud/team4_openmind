import { useEffect, useState } from 'react'
import StyleFloatingBtn from './StyleFloatingBtn'

const FloatingBtn = () => {
  const [buttonText, setButtonText] = useState('')
  const [width, setWidth] = useState(0)
  useEffect(() => {
    // 화면 크기에 따라 버튼 텍스트 변경
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setButtonText('질문 작성')
        setWidth('140px')
        return
      }
      setButtonText('질문 작성하기')
      setWidth('208px')
    }
    handleResize() // 처음 렌더링 시에도 실행
    window.addEventListener('resize', handleResize) // resize는 화면 크기가 변경될 때마다 실행
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <StyleFloatingBtn width={width}>{buttonText}</StyleFloatingBtn>
}
export default FloatingBtn

// 버튼 두개로 만들어서 조건부로 화면 미디어쿼리로 화면 줄어들면 하나로 보이기 
// 클래스를 다르게 만들어서 컴퓨터에서는 큰거로 보이고 핸드폰에서는 작은거로 보이게 하기