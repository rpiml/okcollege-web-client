import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import styles from './styles.css';

const Login = (props) => {

  const { email, password } = props;

  return (
    <div className={styles.loginForm}>
      <Form>
        <Label htmlFor='username'>email</Label>
        <Input
          name='username'
          type='email'
          placeholder='person@example.com'
          value={email}
          onChange={(e) => props.changeUserEmail(e.target.value)}
        />
        <Label htmlFor="">password</Label>
        <Input
          name='password'
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => props.changeUserPass(e.target.value)}
        />
      </Form>
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            if (email && password) {
              props.sendLoginRequest({
                email: email,
                password: password
              })
            }
          }}
          className={styles.submitButton}
          size="lg"
          color="primary">
          Login
        </Button>
        <Button
          onClick={props.changeLoginToSignup}
          size="lg"
          color="primary">
          Signup
        </Button>
      </div>
    </div>
  )
}

export default Login
