import classes from './MainButton.module.scss'

const BtnWithOutAuth = () => {
   return (
      <a
         onClick={(e) => e.preventDefault()}
         className={classes.linkBtn}
      >
         Продолжить без авторизации
      </a>
   )
}

export default BtnWithOutAuth