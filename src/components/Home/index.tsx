import React from 'react'
import styles from './index.less'
import { connect } from 'react-redux'

interface PropsProperty {
  name: string
  age?: number
}
interface model_example {
  example: PropsProperty
}
const Home = (options: PropsProperty) => {
  const { name } = options
  return (
    <div className={styles.aa}>
      <h1 className={styles.bb}>hellow world {name}</h1>
    </div>
  )
}
const mapStateToProps = ({ example: { name } }: model_example) => {
  return {
    name,
  }
}
export default connect(mapStateToProps)(Home)
