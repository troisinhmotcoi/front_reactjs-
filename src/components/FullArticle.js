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
              if(user.tag==='love')
              
              return (<div className="params">
                             <h1 className="entry_title">
              <a>Bảo vệ: "{user.title}"</a>
              </h1>
                   <div className="entry_content">
                   <form onSubmit={ this.handleSubmit }>

                   <div className="form-group">

                <label htmlFor="password">Mật khẩu</label>

                <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    onChange={ this.handleInputChange}
                    value={this.state.password}
                    />
                    <button type="submit" className="btn btn-primary">
                        Nhập vào
                    </button>
                </div>
                </form>
                </div>
               
                   </div>
              )
              else 
              {return<div className="params">
              <h1 className="entry_title">
              <a>{user.title}</a>
              </h1>
              
              <div className="entry_content">
                


  <li key="user.id">
    <Link to={`/article/${user.id}`}>continue reading</Link>
  </li>
              
                
                </div>
              </div>  }
              
              
              ;
            })
          ) : (
            <h3> loading ....</h3>
          )}
        </React.Fragment>
      );
    }
  }

export default FullArticle
