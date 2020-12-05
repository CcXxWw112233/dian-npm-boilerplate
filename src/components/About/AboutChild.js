import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AboutChild extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentDidMount() {}
  renderCount = () => {
    return <div>子组件外部渲染---{this.count}---count</div>
  }

  render() {
    return (
      <div>
        <div onClick={this.onClick}>子组件的点击</div>
        <div>{this.renderCount()}</div>
      </div>
    )
  }
}
AboutChild.propTypes = {
  prop: PropTypes,
}
export default AboutChild
