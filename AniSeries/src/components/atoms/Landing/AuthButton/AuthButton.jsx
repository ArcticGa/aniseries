import classes from './AuthButton.module.scss'


const AuthButton = ({ children,  ...props}) => {
   return (
      <button className={classes.authBtn} {...props}>
         {children}
      </button>
   )
}

export default AuthButton