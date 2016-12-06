import React from 'react'
import { Form, Label, Input, Button } from 'reactstrap'

const Signup = (props) => {

  const { firstName, lastName, email, password } = props

  return (
    <div className="signupForm">
      <Form>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          name="firstName"
          placeholder='John'
          value={firstName}
          onChange={(e) => props.changeUserFirstName(e.target.value)}></Input>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          name="lastName"
          placeholder='Smith'
          value={lastName}
          onChange={(e) => props.changeUserLastName(e.target.value)}></Input>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          placeholder='john@example.com'
          value={email}
          onChange={(e) => props.changeUserEmail(e.target.value)}></Input>
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          type='password'
          placeholder=''
          value={password}
          onChange={(e) => props.changeUserPass(e.target.value)}></Input>
      </Form>
      <Button size="lg" color="primary"
        onClick={() => {
          if (email && password && firstName && lastName) {
            props.sendSignupRequest({
              email: email,
              password: password,
              firstname: firstName,
              lastName: lastName
            })
          }
        }
        }
      >Signup</Button>
    </div>
  )
}

export default Signup
