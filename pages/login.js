


import React from 'react';
import styles from '../components/login_registration.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

export const DESKTOP_WIDTH = 1160;



function SignUp(props){
  const router = useRouter()

  async function signUp() {
    try {
      const requestBody = JSON.stringify({
          email: props.email,
          password: props.password
      });
      const response = await api.post('/auth/login', requestBody);

      // Get the returned user and update a new object.
      const user = new User(response.data);

      // Store the token into the local storage.
      localStorage.setItem('token', user.token);
      localStorage.setItem('id', user.id);

    
      router.push('/appsOverview')

    } catch (error) {
      alert(`Something went wrong during the login: \n${handleError(error)}`);
    }
  }
  
  
  return (
    <button
    className={styles.Button}
    disabled={!props.email || !props.password}
    width="50%"
    onClick={() => {
      signUp();
    }}
    >
      Login in
    </button>
  )
}



export default class Registration extends React.Component {
  
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    };
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
                    <h1>Login</h1>
                      
                      <label className={styles.Label}>
                        Email
                      </label>
                      <input
                        className={styles.InputField}
                        placeholder="Enter here.."
                        onChange={e => {
                          this.handleInputChange('email', e.target.value);
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
                        <SignUp email={this.state.email} password={this.state.password}/>
                      </div>
                      
                      <div className={styles.ButtonContainer}>
                        <Link href="/registration">
                          <button
                            className={styles.Button}
                            width="50%"
                          >
                            To Registration
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
