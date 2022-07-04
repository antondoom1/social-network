import React from 'react'
import s from './FormsControls.module.css'

type FormControlPropsType = {
  input: any
  meta: any
  child: any
}

const FormControl: React.FC<FormControlPropsType> = ({input, meta, child, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props: any) => {
  const {input, meta, child, ...restProps} = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps}/>
    </FormControl>
  )
}