import React from "react";
import { api } from "../helpers/api";
import { withRouter } from "react-router-dom";
import { Button, ButtonContainer } from "../views/design/Button";
import {BaseContainer, Introduction, IntroductionContainer, Label, Form, FormContainer, InputField} from "../views/design/LoginRegistration";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {isEmailFormatCorrect} from "../helpers/isEmailFormatCorrect"

class Registration extends React.Component {

  constructor() {
    super();
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      errorMessage: null
    };
  }

  // send register request to back end and if approved redirect to email verification page
  async register() {
    // check correct format of email address
    if(isEmailFormatCorrect(this.state.email)){

      try{
        const requestBody = JSON.stringify({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          password: this.state.password
        });
        const response = await api.post("/auth/email/register", requestBody);

        console.log(response.status);
        console.log(response.data);
        console.log(response.data.payload);
        if (response.data.message === "REGISTER.EMAIL_VERIFIED"){
          localStorage.setItem("email", this.state.email)
          this.props.history.push({
            pathname: "/emailVerification",
            state: {email: this.state.email}
          });


        }else{
          if(response.data.error === "ERROR.REGISTRATION.EMAIL_NOT_SENT"){
            NotificationManager.success('Email account was created', 'Success',3000);
            await new Promise(resolve => setTimeout(resolve, 3000));
            this.props.history.push("/login");
          }else{
            NotificationManager.error('Error: Account with this email address already exists','',3000);
          }
        }
      }catch (error){
        NotificationManager.error('Something went wrong','Error',3000);
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
              <h1>Registration</h1>
              <Label>First name</Label>
              <InputField
                placeholder="Enter here.."
                onChange={(e) => {
                  this.handleInputChange("firstname", e.target.value);
                }}
              />
              <Label>Last name</Label>
              <InputField
                placeholder="Enter here.."
                onChange={(e) => {
                  this.handleInputChange("lastname", e.target.value);
                }}
              />
              <Label>Email</Label>
              <InputField
                placeholder="Enter here.."
                onChange={(e) => {
                  this.handleInputChange("email", e.target.value);
                }}
              />
              <Label>Password</Label>
              <InputField
                type="Password"
                placeholder="Enter here.."
                onChange={(e) => {
                  this.handleInputChange("password", e.target.value);
                }}
              />
              <ButtonContainer>
                <Button
                  disabled={!this.state.firstname || !this.state.lastname || !this.state.email || !this.state.password}
                  width="50%"
                  style={{ margin: "5px" }}
                  onClick={() => {
                    this.register();
                  }}
                >
                  registration
                </Button>
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  width="50%"
                  onClick={() => {
                    this.props.history.push("/login");
                  }}
                >
                  Go to Login
                </Button>
              </ButtonContainer>
            </Form>
            </IntroductionContainer>
        </FormContainer>
      </BaseContainer>
    );
  }
}


export default withRouter(Registration);
