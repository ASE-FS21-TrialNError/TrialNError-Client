import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import {Button, ButtonContainer} from "./Button";

const HeaderContainer = styled.div`
  height: 100px;
  background-color: rgb(169, 222, 253);
  
  justify-content: left;
  align-items: center;
  
`;

const TitleContainer = styled.div`
  font-weight: bold;
  color: white;
  text-align: center;
  background: linear-gradient(rgb(55, 134, 252), rgb(4, 31, 184));
  margin-padding: 50px;
  width: 20%;
  height: 100px;
  float: left;
`;
const Title = styled.h1`
  font-weight: bold;
  color: white;
  text-align: center;
  margin-padding: 50px;
`;

const NavigationContainer = styled.div`
  float: right;
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  overflow: auto;
  backround-color: red;
`;

const NavButton = styled(Button)`
  float: right;
  min-width: 150px;
`;

const NavButtonContainer = styled.div`
  float: right;
  display-flex: none;
  margin-top: 0px;
  padding-right: 50px;
  backround-color: green;
  width: 200;
  overflow: hidden;
`;

export class Header extends React.Component {

  constructor() {
    super();

  }

  logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("loginUserid");
    this.props.history.push("/login");

  }

  render(){
    return (
      <HeaderContainer>
        <TitleContainer>
          <Title>
            AppCom
          </Title>
        </TitleContainer>
        <NavigationContainer>
          <NavButtonContainer>
            <NavButton>
              Dashboard
            </NavButton>
          </NavButtonContainer>
          <NavButtonContainer>
            <NavButton>
              AppsOverview
            </NavButton>
          </NavButtonContainer>
          <NavButtonContainer>
            <NavButton
              onClick={() => {
                this.logout();
              }}
            >
              Logout
            </NavButton>
          </NavButtonContainer>
        </NavigationContainer>
        
      </HeaderContainer>
    )
  }
}

