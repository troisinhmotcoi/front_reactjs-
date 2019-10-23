import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullArticle from './FullArticle'
import ArticlePage from './ArticlePage'

// The Roster component matches one of two different routes
// depending on the full pathname
const Article = () => (
  <Switch>
    <Route exact path='/article' component={FullArticle}/>
    <Route path='/article/:id' component={ArticlePage}/>
  </Switch>
)


export default Article
