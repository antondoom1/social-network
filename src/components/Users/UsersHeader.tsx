import {Item, Row} from '@mui-treasury/components/flex'
import {Link, makeStyles} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
  header: {
    fontFamily: 'Barlow, san-serif',
    backgroundColor: '#fff'
  },
  headline: {
    color: '#122740',
    fontSize: '1.25rem',
    fontWeight: 600
  },
  link: {
    color: '#2281bb',
    padding: '0 0.25rem',
    fontSize: '0.875rem',
    cursor: 'pointer'
  },
  actions: {
    color: '#BDC9D7'
  }
}))

export const UsersHeader = () => {
  const styles = useStyles()
  return (
    <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
      <Item stretched className={styles.headline}>Who to follow</Item>
      <Item className={styles.actions}>
        <Link className={styles.link}>Refresh</Link> •{' '}
        <Link className={styles.link}>See all</Link>
      </Item>
    </Row>
  )
}