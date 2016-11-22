/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectLoginPage from './selectors';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { userClickedSubmit, changeUserEmail, changeUserPass } from './actions';
import styles from './styles.css';
import { loginRequest } from '../../auth/actions'

const LoginPage = (props) => {

  const { isLoggedIn, email, password, isLoading } = props;
  //console.log('email:',email, 'pass:',password)

  const LoadElement =  isLoading? 'ITS LOADING!!!!' : ''

  return (
    <div className={styles.loginPage}>
      <Helmet
        title='LoginPage'
        meta={[
          { name: 'description', content: 'Description of LoginPage' },
        ]}
      />
      <div>
        <Form>
          <Label htmlFor='username'>email</Label>
          <Input
            name='username'
            type='email'
            placeholder='person@example.com'
            onChange={(e) => props.dispatch(changeUserEmail(e.target.value))}
          />
          <Label htmlFor="">password</Label>
          <Input
            name='password'
            type='password'
            placeholder='password'
            onChange={(e) => props.changeUserPass(e.target.value)}
          />
        </Form>
        <Button
          onClick={() => {
            if (email && password) {
              props.dispatch(loginRequest({
                email: email,
                password: password
              }))
            }
          }}
          className={styles.submitButton}
          size="lg"
          color="primary">Login</Button>
      </div>
      {LoadElement}
    </div>
  );
}

const mapStateToProps = selectLoginPage();

function mapDispatchToProps(dispatch) {
  return {
    changeUserPass: email => dispatch(changeUserEmail(email)),
    changeUserPass: pass => dispatch(changeUserPass(pass)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
