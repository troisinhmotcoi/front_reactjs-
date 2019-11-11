import React  from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom'

export default class ArticlePage extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      articleTitle: '',
      artcontent:''
    }
  }
 componentDidMount(){
  const id=this.props.match.params.id;
  
  axios.get (
   `https://neunhuladinhmenh.herokuapp.com/api/polls/${id}`
 )
 
 .then(response => {
  this.setState({ articleTitle: response.data.title ,

    artcontent:response.data.content,
  });
})
.catch(error => {
  console.log(error);
});
}

render() {
    
    const { articleTitle,artcontent} = this.state;
  
    
    return (           <React.Fragment>
{articleTitle}
{artcontent.split("\r\n").map(artcontent=>{
return ( 
      <div>
        
       <p>{artcontent}</p>

      </div>)})}
      {
          <Link to={`/article`}>back</Link>
      }
          </React.Fragment>
          )
      }


       ;
  
    

        
            
}
  
    
 

