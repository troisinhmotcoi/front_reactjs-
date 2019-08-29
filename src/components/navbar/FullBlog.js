import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullBlog = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/blog/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullBlog
