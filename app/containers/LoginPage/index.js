/*
 *
 * LoginPage
 *
 */

import { Alert } from 'antd'
import React  from 'react'
import Helmet  from 'react-helmet'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { loginRequest } from '../../auth/actions'
import Login  from '../../components/Login'
import Signup  from '../../components/Signup'
import { userClickedSubmit, changeUserEmail, changeUserPass, changeUserFirstName, changeUserLastName, changeLoginToSignup, signupRequest } from './actions'
import selectLoginPage  from './selectors'
import styles  from './styles.css'

require("!style!css!antd/dist/antd.min.css");

const LoginPage = (props) => {

  const { email, password, firstName, lastName, error, errorMessage } = props;

  const loginElement = (
    <Login
      email={email}
      password={password}
      changeUserEmail={props.changeUserEmail}
      changeUserPass={props.changeUserPass}
      sendLoginRequest={props.sendLoginRequest}
      changeLoginToSignup={props.changeLoginToSignup}
    />
  )
  const signupElement = (
    <Signup
      email={email}
      password={password}
      firstName={firstName}
      lastName={lastName}
      changeUserEmail={props.changeUserEmail}
      changeUserPass={props.changeUserPass}
      changeUserFirstName={props.changeUserFirstName}
      changeUserLastName={props.changeUserLastName}
      sendSignupRequest={props.sendSignupRequest}
    />
  )

  const pageForm = props.isSigningUp ? signupElement : loginElement

  return (
    <div className={styles.loginPage}>
      <Helmet
        title='LoginPage'
        meta={[
          { name: 'description', content: 'Description of LoginPage' },
        ]}
      />
      { error ?
        <Alert
          message="Error"
          description={errorMessage}
          type="error"
          showIcon
        />
        : null
      }
      {pageForm}
    </div>
  );
}

const mapStateToProps = selectLoginPage();

function mapDispatchToProps(dispatch) {
  return {
    changeUserEmail: email => dispatch(changeUserEmail(email)),
    changeUserPass: pass => dispatch(changeUserPass(pass)),
    changeUserFirstName: firstName => dispatch(changeUserFirstName(firstName)),
    changeUserLastName: lastName => dispatch(changeUserLastName(lastName)),
    sendLoginRequest: data => dispatch(loginRequest(data)),
    sendSignupRequest: data => dispatch(signupRequest(data)),
    changeLoginToSignup: () => dispatch(changeLoginToSignup()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
