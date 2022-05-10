import BtnWithOutAuth from './BtnWithOutAuth'
import classes from './MainButton.module.scss'
import { Link } from "react-scroll";

const MainButton = ({ children }) => {
   return (
      <div className={classes.block}>
         <Link className={classes.link} to='form' smooth={true}>
            {children}
         </Link>
         <BtnWithOutAuth />
      </div>

   )
}

export default MainButton