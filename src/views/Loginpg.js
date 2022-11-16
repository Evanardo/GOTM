import React, { Component } from 'react'

export default class Loginpg extends Component {
  render() {
    return (
      <div>
        <section>
          <h1>Login</h1>
          <div className="signUpForm">
            <form onSubmit={(e) => { this.sendSignUpInfo(e) }}>
              {/* <input placeholder='Username' name='username' className='form-control' type='text'/> */}
              <input placeholder='Email' name='email' className='form-control' type='text' />
              <input placeholder='Password' name='password' className='form-control' type='password' />
              {/* <input placeholder='Confirm Password' name='confirm-password' className='form-control' type='password'/> */}

              <div className='registerButt'>
                <button type='submit' id="register" className='btn'>Login</button>
              </div>

            </form>
          </div>
        </section>
      </div>
    )
  }
}
