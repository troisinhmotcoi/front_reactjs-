import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullBlog from './FullBlog'
import Player from './Player'

// The Roster component matches one of two different routes
// depending on the full pathname
const Blog = () => (
  <Switch>
    <Route exact path='/blog' component={FullBlog}/>
    <Route path='/blog/:number' component={Player}/>
  </Switch>
)


export default Blog