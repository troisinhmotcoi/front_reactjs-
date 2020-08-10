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
   if (response.data.tag==null){
  this.setState({ articleTitle: response.data.title ,

    artcontent:response.data.content,
  })};
})
.catch(error => {
  console.log(error);
});
}

render() {
    
    const { articleTitle,artcontent} = this.state;
  const str=artcontent.replace(/\n/g,"<br/>");
  

    return (           <React.Fragment>
{articleTitle}
<<<<<<< HEAD
<<<<<<< HEAD

{str.split('<br/>').map(artcontent=>{
  if(artcontent === ''){return <br/>}
else {return ( 
      <div>
        
       <p>{artcontent}</p>
       
      </div>) }
    })}
=======
=======
>>>>>>> fe256be18a96ec65d96bf801fd4290ff0ddc59da
{artcontent.split("\n").map(artcontent=>{
if(artcontent===''){return <br/>}
else{
return ( 
      <div>
        
       <p>{artcontent}</p>

      </div>)}})}
<<<<<<< HEAD
>>>>>>> fe256be18a96ec65d96bf801fd4290ff0ddc59da
=======
>>>>>>> fe256be18a96ec65d96bf801fd4290ff0ddc59da
      {
          <Link to={`/article`}>back</Link>
      }
          </React.Fragment>
          )
      }


       ;
  
    

        
            
}
  
    
 

