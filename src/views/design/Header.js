import React from "react";
import styled from "styled-components";
import {Button} from "./Button";
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom";

const HeaderContainer = styled.div`
  height: 100px;
  background-color: rgb(169, 222, 253);
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const TitleContainer = styled.div`
  font-weight: bold;
  color: white;
  text-align: center;
  background: linear-gradient(rgb(55, 134, 252), rgb(4, 31, 184));
  width: 20%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-weight: bold;
  color: white;
  text-align: center;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  width: 80%;
  padding-right: 5%;
`;

const NavButton = styled(Button)`
  min-width: 220px;
  padding: 0;
  font-size: 20px;
`;

const NavButtonContainer = styled.div`
  margin-top: 0;
  margin-right: 50px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100px;
`;

class Header extends React.Component {
  constructor() {
    super();
  }

  logout() {

    localStorage.removeItem("token");
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
            <NavButton
              onClick={()=>{
                this.props.pushDashboard()
              }}
            >
              Dashboard
            </NavButton>
          </NavButtonContainer>
          <NavButtonContainer>
            {/*<Link
              to={{
                pathname: "/appsOverview"
              }}
            >*/}
              <NavButton
                onClick={()=>{
                  this.props.pushAppsOverview()
                }}
              >
                Apps Overview
              </NavButton>
            {/*</Link>*/}
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

export default withRouter(Header);