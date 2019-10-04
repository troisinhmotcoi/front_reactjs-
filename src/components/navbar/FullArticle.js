import React from 'react'
import './css/article.css'
import { Link } from 'react-router-dom'

class FullArticle extends React.Component {
    state = {
      isLoading: true,
      users: [],
      error: null
    };
  
    fetchUsers() {
      
      fetch(`https://neunhuladinhmenh.herokuapp.com/api/polls`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            users: data,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
      this.fetchUsers();
    }
    render() {
      const { isLoading, users, error } = this.state;
      return (
        <React.Fragment>
          
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            users.map(user => {
              
              return (
                <div className="params">
                <h1 className="entry_title">
                <a>{user.title}</a>
                </h1>
                
                <div className="entry_content">
                  
  
  
    <li key="user.id">
      <Link to={`/article/${user.id}`}>continue reading</Link>
    </li>
                
                  
                  </div>
                </div>  
                  
              );
            })
          ) : (
            <h3>Đang load đợi chút ....</h3>
          )}
        </React.Fragment>
      );
    }
  }

export default FullArticle
