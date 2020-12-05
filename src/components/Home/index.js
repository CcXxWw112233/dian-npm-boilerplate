import React from 'react'
import styles from './index.less'
import { connect } from 'react-redux'

const Home = (options) => {
  const { name } = options
  return (
    <div className={styles.aa}>
      <h1 className={styles.bb}>hello world {name}</h1>
    </div>
  )
}
const mapStateToProps = ({ example: { name } }) => {
  return {
    name,
  }
}
export default connect(mapStateToProps)(Home)
