import SuggestionItem from "./SuggestionItem"
import { suggestions } from "./Data"

const SuggestionList = () => {

   return (
      <section className="suggestions">
         {suggestions.map(sug =>
            <SuggestionItem key={sug.id} suggestion={sug} reverse={sug.reverse} />
         )}
      </section>
   )
}

export default SuggestionList