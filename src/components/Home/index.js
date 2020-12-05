import React from 'react'
import styles from './index.less'
import { connect } from 'react-redux'

const Home = (options) => {
  const {
    userInfo: { name, girl_friends },
  } = options
  console.log('ssss', { girl_friends })
  return (
    <div className={styles.aa}>
      Home
      <div className={styles.bb}>{name}</div>
    </div>
  )
}
const mapStateToProps = ({ userInfo }) => {
  return {
    userInfo,
  }
}

// 使用connect 关联redux
export default connect(mapStateToProps)(Home)
