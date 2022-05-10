import styled from "styled-components"
import { GetStatIcon } from "../../icons/GetIconSvg"

const Square = styled.div`
   width: 4rem;
   height: 4rem;
   border-radius: 8px;
   background: ${props => props.background};
   display: flex;
   justify-content: center;
   align-items: center;
`

const RightItem = styled.div`
   width: 100%;
   height: 460px;
   background: ${(props) => props.background};
   border-radius: 32px;
   order: ${({reverse}) => reverse ? '1' : '-1'};
   @media (max-width: 1000px) {
      height: 35px;
      width: 100%;
      border-radius: 32px 32px 0 0;
      grid-template-columns: 0.1fr;
      grid-area: 1 / 1 / 2 / 2;
   }
`

const SuggestionItem = ({ suggestion }) => {
   return (
      <div className="item">
         <div className="leftItem">
            <div className="upTitle">
               <h3>{suggestion.title}</h3>

            </div>
            <p>{suggestion.text}</p>
         </div>
         <RightItem
            reverse={suggestion.reverse}
            background={suggestion.background}
         />
      </div>
   )
}

export default SuggestionItem