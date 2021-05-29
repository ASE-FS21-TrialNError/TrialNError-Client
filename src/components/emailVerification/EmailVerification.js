
import React from "react";
import { withRouter } from "react-router-dom";
import {
  BaseContainer,
  FormContainer, InputField,
} from "../../views/design/LoginRegistration";
import {Button, ButtonContainer} from "../../views/design/Button";
import styled from "styled-components";
import {api} from "../../helpers/api";
import {NotificationContainer, NotificationManager} from 'react-notifications';


const EmailVerificationContainer = styled.div`
  height: 400px;
  min-height: 400px;
  min-width: 300px;
  max-width: 300px;
  
  border-radius: 30px;
  background-color: rgb(169, 222, 253);
`;

const Heading = styled.div`
  background: linear-gradient(rgb(55, 134, 252), rgb(4, 31, 184));
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  color: white;
`;

const InputForm = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 10%;
  padding-right: 10%;
  height: 80%;
  width: 100%;
`;

// after a user registered he is directed to the email verification page, to verify his email address
class EmailVerification extends React.Component{
  constructor() {
    super();
    this.state = {
      code: null
    }
  }

  handleInputChange(key, value) {
    this.setState({ [key]: value });
  }

  // send entered code to backend to very the account
  async verifyEmail(){
    try{
      const url = "/auth/email/otp"
      let requestBody = {
        "email": this.props.location.state.email,
        "token": this.state.code
      }
      const response = await api.post(url, requestBody);
      //console.log(response);
      if(response.status === 201){
        NotificationManager.success('Account verified', 'Success',3000);
        localStorage.setItem("token", response.data.payload.token);
        await new Promise(resolve => setTimeout(resolve, 3000));
        this.props.history.push("/appsOverview")
      }
      if(response.data.errorCode === 104){
        NotificationManager.error('Wrong code entered', 'Error',3000);
      }

    }catch (error){
      //console.log(error);
      NotificationManager.error('Something went wrong', 'Error',3000);
    }
  }


  render() {
    return (
      <BaseContainer>
        <FormContainer>
          <NotificationContainer/>
          <EmailVerificationContainer>
            <Heading>
              <h1>AppCom</h1>
            </Heading>
            <InputForm>
              <h2
                style={{height: "5%", marginTop: "15%"}}
              >
                Email Verification
              </h2>
              <p
                style={{height: "15%", textAlign: "center"}}
              >
                Please enter the code you received per email.
              </p>
              <InputField
                style={{height: "14%"}}
                type="password"
                placeholder="Enter the code here..."
                onChange={(e) => {
                  this.handleInputChange("code", e.target.value);
                }}
              />
              <ButtonContainer
                style={{margin: "0", width: "100%"}}
              >
                <Button
                  disabled={this.state.code === null}

                  style={{ width: "75%" }}
                  onClick={() => {
                    this.verifyEmail();
                  }}
                >
                  Login
                </Button>
              </ButtonContainer>
            </InputForm>
          </EmailVerificationContainer>
        </FormContainer>
      </BaseContainer>
    );
  }


}


export default withRouter(EmailVerification);