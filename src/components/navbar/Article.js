import React from 'react'
class Article extends React.Component {
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
            const {  title, content } = user;
            return (
              <div >
              <p>{title}</p>
                <p> {content}</p>
                
                
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

          
        
    

export default Article