import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import AboutChild from './AboutChild'

function About() {
  return (
    <div>
      about
      <React.Fragment>ss</React.Fragment>
      <ul>
        <li>
          <Link to="/about/detail">去看看详情吧</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/about/detail" component={AboutChild} />
      </Switch>
    </div>
  )
}
export default About
