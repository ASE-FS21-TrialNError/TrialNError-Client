/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { api } from "../helpers/api";
import { withRouter } from "react-router-dom";
import { Button, ButtonContainer } from "../views/design/Button";
import Error from "../views/Error";
import {BaseContainer, Introduction, IntroductionContainer, Label, Form, FormContainer, InputField} from "../views/design/LoginRegistration";


class Login extends React.Component {
  
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      errorMessage: null,
    };
  }

  async login() {
    try{

      const requestBody = JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      });
      console.log(requestBody);
      const response = await api.post("/auth/login", requestBody);

      console.log(response.status);
      if(response.status == 200){
        localStorage.setItem("token", response.data.payload.token);
        this.props.history.push("/appsOverview");
      }else{
        this.setState({
          errorMessage: response.data.error
        });
      }
    }catch(error){
      console.log(error);
      this.setState({
        errorMessage: error.response.data.error
      });
    }
    

  }


  handleInputChange(key, value) {
    this.setState({ [key]: value });
  }


  componentDidMount() {}

  render() {
    return (
      <BaseContainer>
        <FormContainer>
          <IntroductionContainer>
            <Introduction>
              <h1>Welcome to the AppCom</h1>
              <p1>This Website compares apps from the Google Play Store and Apple Store. </p1>
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
          <Error message={this.state.errorMessage}/>  
        </FormContainer>
      </BaseContainer>
    );
  }
}


export default withRouter(Login);
