import classes from './TitleLanding.module.scss'

const TitleLanding = ({ title, backgroundtext, id, none}) => {
   const blockNone = none ? classes.none : ' '
   return (
      <div className={`${classes.titleBlock} ${blockNone}`} id={id}>
         <p>{backgroundtext}</p>
         <h2>{title}</h2>
      </div>
   )
}

export default TitleLanding