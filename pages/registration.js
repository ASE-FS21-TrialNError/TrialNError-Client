

import React from 'react';
import styles from '../components/login_registration.module.css'
import Link from 'next/link'

export const DESKTOP_WIDTH = 1160;


export default class Registration extends React.Component {
  
  constructor() {
    super();
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      password: null
    };
  }
  
  async signUp() {
    try {
      const requestBody = JSON.stringify({
        username: this.state.username,
        name: this.state.name,
        password: this.state.password
      });
      const response = await api.post('/users', requestBody);

      // Get the returned user and update a new object.
      const user = new User(response.data);

      // Store the token into the local storage.
      localStorage.setItem('token', user.token);
      localStorage.setItem('id', user.id)

      // Login successfully worked --> navigate to the route /game in the GameRouter
      this.props.history.push(`/game`);
    } catch (error) {
      alert(`Something went wrong during the login: \n${handleError(error)}`);
    }
  }





  handleInputChange(key, value) {
      this.setState({ [key]: value });
  }

  

  render() {
    return (
      <div>
          <div className={styles.BaseContainer}>
              <div className={styles.FormContainer}>
                <div className={styles.IntroductionContainer}>
                  <div className={styles.Introduction}
                  >
                    <h1>Welcome to the App Comparator</h1>
                    <p1>This Website compares apps from the Google Play store and Apple store. </p1>
                  </div>

                  <div className={styles.Form}>
                    <h1>Registration</h1>
                      
                      <label className={styles.Label}>
                        Email
                      </label>
                      <input
                        className={styles.InputField}
                        placeholder="Enter here.."
                        onChange={e => {
                          this.handleInputChange('username', e.target.value);
                        }}
                      />

                      <label className={styles.Label}>
                          First Name
                      </label>
                      <input
                        className={styles.InputField}
                        placeholder="Enter here.."
                        onChange={e => {
                          this.handleInputChange('firstname', e.target.value);
                        }}
                      />
                      <label className={styles.Label}>
                          Last Name
                      </label>
                      <input
                        className={styles.InputField}
                        placeholder="Enter here.."
                        onChange={e => {
                          this.handleInputChange('lastname', e.target.value);
                        }}
                      />
                      <label className={styles.Label}>
                          Password
                      </label>
                      <input
                        className={styles.InputField}
                        placeholder="Enter here.."
                        onChange={e => {
                          this.handleInputChange('password', e.target.value);
                        }}
                      />


                      <div className={styles.ButtonContainer}>
                        <button
                          className={styles.Button}
                          disabled={!this.state.username || !this.state.firstname || !this.state.lastname || !this.state.password}
                          width="50%"
                          onClick={() => {
                            this.signUp();
                          }}
                        >
                          Sign UP
                        </button>
                      </div>
                      
                      <div className={styles.ButtonContainer}>
                        <Link href="/login">
                          <button
                            className={styles.Button}
                            width="50%"
                          >
                            Back to Login
                          </button>
                        </Link>
                      </div>

                  </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
}
