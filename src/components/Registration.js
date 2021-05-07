import React from "react";
import { api } from "../helpers/api";
import { withRouter } from "react-router-dom";
import { Button, ButtonContainer } from "../views/design/Button";
import Error from "../views/Error";
import {BaseContainer, Introduction, IntroductionContainer, Label, Form, FormContainer, InputField} from "../views/design/LoginRegistration";



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

  async registration() {
    const requestBody = JSON.stringify({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    });
    const response = await api.post("/auth/register", requestBody);

    console.log(response.status);
    console.log(response.data);
    console.log(response.data.payload);
    if (response.status === 201){

      //localStorage.setItem("token", response.data.payload.token);

      this.props.history.push("/Login");
    }else{
      this.setState({
        errorMessage: response.data.error,
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
                    this.registration();
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
            <Error message={this.state.errorMessage}/>
        </FormContainer>
      </BaseContainer>
    );
  }
}


export default withRouter(Registration);
