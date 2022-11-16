import React, { Component } from 'react'
import { useState } from 'react'

export default class SignUp extends Component {

  sendSignUpInfo = async (e) => {
    e.preventDefault();

    const username = e.target.username.value
    const email = e.target.username.value
    const password = e.target.username.value
    const password2 = e.target.username.value
    if (password !== password2) {
      console.log("passwords don't match")
      return
    }
    const res = await fetch('http://localhost:5000/api/signup', {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    });//url,options
    const data = await res.json();
    console.log(data)
    if (data.status === 'ok') {
      this.props.addMessage(data.message, 'success')
    }
  }

  render() {
    return (
      <div>
        <section>
          <h1>Sign Up</h1>
          <div className="signUpForm">
            <form onSubmit={(e) => { this.sendSignUpInfo(e) }}>
              <input placeholder='Username' name='username' className='form-control' type='text' />
              <input placeholder='Email' name='email' className='form-control' type='text' />
              <input placeholder='Password' name='password' className='form-control' type='password' />
              <input placeholder='Confirm Password' name='confirm-password' className='form-control' type='password' />

              <div className='registerButt'>
                <button type='submit' id="register" className='btn'>Register</button>
              </div>

            </form>
          </div>
        </section>
      </div>
    )
  }
}
