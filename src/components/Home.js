import React from 'react'
import { Link } from 'react-router-dom';
import {setCurrentUser,getAll} from '../actions/authentication'
class Home extends React.Component {    constructor(props) {
    super(props);

    this.state = {
        currentUser: setCurrentUser,
        users: null
    };
}

componentDidMount() {
    getAll().then(users => this.setState({ users }));
}

render() {
    const { currentUser, users } = this.state;
    return (
        <div>
            <h1>Hi {currentUser.firstName}!</h1>
            <p>You're logged !!</p>
            <h3>Love like oxygen:</h3>
            {users &&
                <ul>
                    {users.map(user =>
                        <li key={user.id}>{user.firstName} {user.lastName}</li>
                    )}
                </ul>
            }
        </div>
    );
}
}

export default Home;
