import React from 'react'
import { connect} from 'react-redux';
import { Link } from 'react-router-dom'

import {secretUser} from '../actions/authentication';
import { object } from 'prop-types';
class About extends React.Component {
    constructor(){super();
        const posts_str = (sessionStorage.getItem('secret'));
   // const post=  posts_str.replace(/\\n/g,"\\n").replace(/\\r/g,"\\r");
        this.state = {
             posts:posts_str,
            isLoading:false
        };
      }
     

    render(){ 
        const {isLoading,posts}=this.state
        return(
            <React.Fragment>
             
                {posts.slice(12)}
               <div> {<Link to={`/article`}>back</Link>}
                         </div>
           </React.Fragment>) 
}
}
export  default connect(null,{secretUser}) (About)
/*{!isLoading ? (
              posts.map(posts=>{ 
                //keys=Object.keys(posts[2]);
            // const   values=Object.values(posts[0])

            return  (<div>
              <h1 key='posts.title'>{posts.title}</h1>
              {posts.slice(30,185).split("\r\n")}
             </div>
                       )
            
            }
               )
              ) : (
                  <h3> loading ....</h3>
                )}
}*/
