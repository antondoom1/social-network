import React from 'react'
import {CircularProgress, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  preloader: {
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export const Preloader = () => {
  const classes = useStyles()

  return (
    <div className={classes.preloader}>
      <CircularProgress size={60}/>
    </div>
  )
}
