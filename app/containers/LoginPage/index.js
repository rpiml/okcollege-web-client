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
import { userClickedSubmit } from './actions';
import styles from './styles.css';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { isLoggedIn, username, password, isLoading } = this.props;

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
            />
            <Label htmlFor="">password</Label>
            <Input
              name='password'
              type='password'
              placeholder='password'
              onChange={(e) => {this.props.dispatch(userEnteredPass(), e)}}
            />
          </Form>
          <Button
            onClick={() => this.props.dispatch(userClickedSubmit())}
            className={styles.submitButton}
            size="lg"
            color="primary">Submit</Button>
        </div>
        {LoadElement}
      </div>
    );
  }
}

const mapStateToProps = selectLoginPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
