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
