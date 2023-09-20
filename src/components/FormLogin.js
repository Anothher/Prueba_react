import React, { Component } from "react";
import '../css/FormLogin.css';
import media from './../assets/img/triangulo_56px.png'

console.log('hola');
class FormLogin extends Component {
  render() {
    return (
      <div className="MainBox">
        <div className="contLogin">
          <div className="titleLogin">
            <h1>
              LOGIN
            </h1>
          </div>
          <div className="box2">
            <div className="img_login">
              <img src={media} className="img_login_1" alt='imagen del logo' />
            </div>
            <form action="/login" method="POST" className="form_style">
              <label htmlFor="username">User:</label>
              <input type="text" id="username" name="username" required />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />

              <input type="submit" value="Log in" className="login_1" />
              <p>By signing up, you agree to our Terms of Use and Privacy Policy</p>
              <p>You do not have an account? </p>
            </form>
          </div>
        </div>

        <div className="box3" >
          <div className="ear ear--left"></div>
          <div className="ear ear--right"></div>
          <div className="face">
            <div className="eye eye--left" >
              <div className="eye-pupil"></div>
            </div>
            <div className="eye eye--right">
              <div className="eye-pupil"></div>
            </div>
            <div className="muzzle"></div>
          </div>

        </div>
      </div>
    );
  }
}
export default FormLogin;