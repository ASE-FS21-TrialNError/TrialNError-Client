/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { api } from "../helpers/api";
import { withRouter } from "react-router-dom";
import { Button, ButtonContainer } from "../views/design/Button";
import {BaseContainer, Introduction, IntroductionContainer, Label, Form, FormContainer, InputField} from "../views/design/LoginRegistration";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {isEmailFormatCorrect} from "../helpers/isEmailFormatCorrect";


class Login extends React.Component {
  
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      errorMessage: null,
    };
  }

  // send login request to back end where it is checked and if login is approved redirect to apps overview page
  async login() {
    if(isEmailFormatCorrect(this.state.email)){
      try{

        const requestBody = JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        });
        ////console.log(requestBody);
        const response = await api.post("/auth/login", requestBody);

        ////console.log(response.status);
        if(response.status === 200 && response.data.errorCode !== 202){
          localStorage.setItem("token", response.data.payload.token);
          this.props.history.push("/appsOverview");
        }else{
          NotificationManager.error('Error: Account does not exist','',3000);
        }
      }catch(error){
        //console.log(error);
        // User not found
        NotificationManager.error('Error: Password is invalid','',3000);

      }
    }else{
      NotificationManager.error('Error: Email format is incorrect','',3000);
    }
  }


  handleInputChange(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <BaseContainer>
        <FormContainer>
          <NotificationContainer/>
          <IntroductionContainer>
            <Introduction>
              <h1>Welcome to the AppCom</h1>
              <p>This Website compares apps from the Google Play Store and Apple App Store.</p>
            </Introduction>
            <Form>
              <h1>Login</h1>
              <Label>Email</Label>
              <InputField
                placeholder="Enter here.."
                onChange={(e) => {
                  this.handleInputChange("email", e.target.value);
                }}
              />
              <Label>password</Label>
              <InputField
                type="password"
                placeholder="Enter here.."
                onChange={(e) => {
                  this.handleInputChange("password", e.target.value);
                }}
              />
              <ButtonContainer>
                <Button
                  disabled={!this.state.email || !this.state.password}
                  width="50%"
                  style={{ margin: "5px" }}
                  onClick={() => {
                    this.login();
                  }}
                >
                  Login
                </Button>
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  width="50%"
                  onClick={() => {
                    this.props.history.push("/registration");
                  }}
                >
                  Go to Registration
                </Button>
              </ButtonContainer>
              
            </Form>
          </IntroductionContainer>
        </FormContainer>
      </BaseContainer>
    );
  }
}


export default withRouter(Login);
