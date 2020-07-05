import React  from 'react'
import { Container, Row, Col,CardTitle} from 'reactstrap';

import axios from 'axios';
import { Link } from 'react-router-dom'
import { Divider } from 'material-ui';

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
            
        
             <Container>
             <Row xs="3">
             
             
             <Col ></Col>
             <Col >
            <CardTitle color="red" 
    
>
               {articleTitle}
            </CardTitle>            
         {str.split('<br/>').map(artcontent=>{
        if(artcontent === ''){return <br/>}
        else {return ( 
                    <p>  {artcontent}</p>
                    ) }
                 })}
              </Col>
              <Col></Col>
              
               </Row>
            </Container>
      {
          <Link to={`/article`}>back</Link>
      }
          </React.Fragment>
          )
      }


       ;
  
    

        
            
}
  
    
 

