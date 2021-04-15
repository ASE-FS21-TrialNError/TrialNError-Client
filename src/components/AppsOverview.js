/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { api } from "../helpers/api";
import { Button } from "../views/design/Button";
import { withRouter } from "react-router-dom";
import { Header } from "../views/design/Header";
import { BaseContainer, ContentContainer, PageHeaderContainer, PageHeading} from "../views/design/PageContent";
import Modal from "../views/design/Modal";
import Error from "../views/Error";


const SearchBarContainer = styled.div`
  float: right;
  background: blue;
  width: 70%;
  height: 70px;
`;

const SearchBar = styled.input`
  &::placeholder {
    color: rgba(0, 0, 0, 1);
  }
  height: 35px;
  padding-left: 15px;
  
  border-top-color:rgb(0, 0, 0);
  border-bottom-color:rgb(0, 0, 0);
  border-left: none;
  border-right: none;
  margin-bottom: 20px;
  margin-left: -4px;
  margin-top: 10px;
  border-radius: 20px;
  
  color: rgb(0, 0, 0);
  min-height: 35px;
  min-width: 600px;
`;

const FilterContainer = styled.div`
  border-bottom-color: rgb(220,220,220);
  background: yellow;
  height: 70px;
  clear: both;
  display: flex;
  align-items: center;
`;


const AppsContainer = styled.div`

`;


const SortButton = styled.div`
  background-color = rgb(220,220,220);
  border-color: black;
  border: solid;
  width: 100px;
  height: 50px;
  font-size: 24px;
  fond-weight: bold;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;




class AppsOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      apps: null,
      errorMessage:null,
      sex: null
    };
  }

  logout() {
    try {
      api
        .get("/users/logout/" + localStorage.getItem("loginUserid"))
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      //console.log( `Something went wrong while logout the users: \n${handleError(error)}`);
      this.setState({
        errorMessage: error.message,
      });
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("loginUserid");
      this.props.history.push("/login");
    }
  }
  goToDetails(userId) {
    this.props.history.push({
      pathname: "/userDetails",
      state: { userId: userId },
    });
  }

  async componentDidMount() {
    try {

      const response = await api.get("/users")

      this.setState({ apps: response.data });

      
     
      console.log(response);
    } catch (error) {
      this.setState({
        errorMessage: error.message,
      });
      //alert(`Something went wrong while fetching the users: \n${handleError(error)}`);
    }
  }

  updateSex(value){
    this.setState({sex: value});
  }

  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        <BaseContainer>
          <ContentContainer>
            <PageHeaderContainer>
              <PageHeading>
                Apps Overview
              </PageHeading>
              <SearchBarContainer>
                <SearchBar
                  placeholder="Enter the name of the app here..."
                  onChange={(e) => {
                    this.handleInputChange("email", e.target.value);
                  }}
                />
              </SearchBarContainer>
              
              <FilterContainer>
                <SortButton
                  

                >
                  Sort
                </SortButton>
                <Modal 
                  sex={this.state.sex}
                  updateSex={this.updateSex.bind(this)}
                />

              </FilterContainer>
            </PageHeaderContainer>
            <AppsContainer>
              <h1>{this.state.sex} Hello </h1>
              {!this.state.apps ? (
                <h1>loading</h1>
              ) : (
                <h1>haha</h1>
                // {this.state.apps.map((app) => {
                //   return(app.name);
                // })}
              )}
            </AppsContainer>
          </ContentContainer>
        </BaseContainer>
      </div>
    );
  }
}

export default withRouter(AppsOverview);
