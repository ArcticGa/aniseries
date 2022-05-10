import BottomCircle from "../Landing/BottomCircle"
import Logo from "../Landing/Logo/Logo"
import classes from './Footer.module.scss'

const Footer = () => {
   return (
      <footer className={classes.footer}>
         <Logo />
      </footer>
   )
}

export default Footer