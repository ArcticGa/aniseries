import React from 'react'
import classes from './InputForm.module.scss'


const InputForm = (props) => {

   return (
      <div className={classes.input}>
         <input
            className={classes.inputField}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            {...props}
         />
         <label className={classes.inputLabel}>{props.namelabel}</label>
      </div>
   )
}

export default InputForm