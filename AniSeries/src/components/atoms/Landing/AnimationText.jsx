import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

const animation = keyframes`
   0% {opacity: 0; transform: translateY(15px); }
   25% {opacity: 1; transform: translateY(0); }
   75% {opacity: 1; transform: translateY(0); }
   100% {opacity: 0; transform: translateY(-15px); }
`

const Wrapper = styled.span`
   display: inline-block;
   opacity: 0;
   animation-name: ${animation};
   animation-duration: 2s;
   animation-fill-mode: forwards;
   animation-iteration-count: infinite;
`


const AnimationText = () => {

   const arrayTexts = [
      'совместный просмотр',
      'детальная статистика',
      'лучшие рекомендации',
   ]

   const [count, setCount] = useState(0)

   if (count === arrayTexts.length) {
      setCount(count => count = 0)
   }

   useEffect(() => {

      const interval = setInterval(() => {
         setCount(count => count + 1)
      }, 2000)

      return () => {
         clearInterval(interval)
      }
   }, [])

   return (
      <Wrapper>{arrayTexts[count]}</Wrapper>
   )
}

export default AnimationText