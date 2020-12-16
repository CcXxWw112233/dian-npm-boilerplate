import React from 'react'
import styles from './index.less'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

interface PropsProperty {
  name: string
  age?: number
}
const clx = classNames.bind(styles)

interface model_example {
  example: PropsProperty
}
const Home = (options: PropsProperty) => {
  const { name } = options
  return (
    <div className={clx({ aa: true })}>
      <h1 className={clx({ bb: true })}>hellow world {name}</h1>
    </div>
  )
}
const mapStateToProps = ({ example: { name } }: model_example) => {
  return {
    name,
  }
}
export default connect(mapStateToProps)(Home)
