import React from 'react'
import {CircularProgress, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  preloader: {
    width: '100vh',
    height: '60vh',
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
