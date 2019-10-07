import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { connect } from 'react-redux';
import { 
    inputRegisterEmail,
    inputRegisterUsername,
    inputRegisterConfirmEmail,
    inputRegisterConfirmPassword,
    inputRegisterPassword
} from '../actions';

class Register extends React.Component {
    render() {
        const { 
            email, 
            username, 
            password, 
            confirmEmail, 
            confirmPassword 
        } = this.props.registerForm;
        return (
            <MDBContainer className="pt-5">
              <MDBRow className="justify-content-center">
                <MDBCol md="6">
                  <form>
                    <p className="h5 text-center mb-4">Sign up</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Username"
                        icon="user"
                        group
                        value={username}
                        onChange={(e) => this.props.inputRegisterUsername(e.target.value)}
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Email"
                        icon="envelope"
                        group
                        type="email"
                        value={email}
                        onChange={(e) => this.props.inputRegisterEmail(e.target.value)}
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Confirm Email"
                        icon="exclamation-triangle"
                        group
                        type="text"
                        value={confirmEmail}
                        onChange={(e) => this.props.inputRegisterConfirmEmail(e.target.value)}
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Password"
                        icon="lock"
                        group
                        type="password"
                        value={password}
                        onChange={(e) => this.props.inputRegisterPassword(e.target.value)}
                        validate
                      />
                      <MDBInput
                        label="Confirm Password"
                        icon="lock"
                        group
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => this.props.inputRegisterConfirmPassword(e.target.value)}
                        validate
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn color="primary">Register</MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          )
    }
  
}

const mapStateToProps = ({ registerForm }) => {
    return { registerForm }
}

export default connect(mapStateToProps, { 
    inputRegisterEmail,
    inputRegisterConfirmEmail,
    inputRegisterConfirmPassword,
    inputRegisterPassword,
    inputRegisterUsername
})(Register);