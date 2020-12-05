import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// a
// dasd
@connect()
export default class VisualList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      s: 1,
    }
    this.x = '2'
  }
  static aa = () => {
    console.log('a', this.x)
  }
  rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) => {
    const { girl_friends = [] } = this.props
    return (
      <div key={key} style={style}>
        {girl_friends[index].name}
      </div>
    )
  }

  render() {
    return <div>ss</div>
  }
}
VisualList.aa()
VisualList.propTypes = {
  girl_friends: PropTypes.array,
}
