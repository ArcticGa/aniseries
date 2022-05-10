import HardMouse from "../atoms/Landing/HardMouse/HardMouse"
import MainButton from "../atoms/Landing/MainButton/MainButton"
import MainSectionLeft from "../molecules/Landing/MainSectionLeft/MainSection"
import MainSectionRight from "../molecules/Landing/MainSectionRight/MainSectionRight"

const MainSection = () => {
   return (
      <section >
         <div className="main-section">
            <MainSectionLeft />
            <MainSectionRight />
         </div>
         <MainButton>Вход</MainButton>
         <HardMouse />
      </section>
   )
}

export default MainSection