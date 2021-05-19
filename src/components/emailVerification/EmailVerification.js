
import React from "react";
import { withRouter } from "react-router-dom";
import {
  BaseContainer,
  Form,
  FormContainer, InputField,
  Introduction,
  IntroductionContainer, Label
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
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 5%;
  padding-right: 5%;
  height: 80%;
  width: 100%;
`;

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

  async verifyEmail(){

    try{
      const url = "/auth/email/otp"
      let requestBody = {
        "email": this.props.location.state.email,
        "token": this.state.code
      }
      const response = await api.post(url, requestBody);
      console.log(response);
      if(response.status === 201){
        NotificationManager.success('Account verified', 'Success',3000);
        this.props.history.push("/appsOverview")
      }
      if(response.data.errorCode === 104){
        NotificationManager.error('Wrong code entered', 'Failed',3000);
      }

    }catch (e){

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
              <h2>Email Verification</h2>
              <p>Please enter the code you received per email</p>
              <InputField
                style={{height: "14%"}}
                type="password"
                placeholder="Enter the code here..."
                onChange={(e) => {
                  this.handleInputChange("code", e.target.value);
                }}
              />
              <ButtonContainer
                style={{width: "100%"}}
              >
                <Button
                  disabled={this.state.code === null}

                  style={{ width: "50%" }}
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