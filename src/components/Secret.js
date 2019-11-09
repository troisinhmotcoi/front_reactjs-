import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { secretUser } from '../actions/authentication';
import ReactDOM from 'react-dom';
class Secret extends Component {

    constructor() {
        super();
        this.state = {
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    handleSubmit(e) {
        e.preventDefault();
        
         const   password=this.state.password   
      this.props.secretUser(password);
    
  }
        

    

    componentWillReceiveProps(nextProps) {

        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            
            <form onSubmit={ this.handleSubmit }>
                
                <div className="form-group">
                <label htmlFor="password">Password</label>

                    <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Nhập vào
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

Secret.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export  default connect(mapStateToProps, { secretUser })(Secret)