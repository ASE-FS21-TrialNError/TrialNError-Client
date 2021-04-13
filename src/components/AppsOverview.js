/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { api } from "../helpers/api";
import { Button } from "../views/design/Button";
import { withRouter } from "react-router-dom";
import { Header } from "../views/design/Header";
import { BaseContainer, ContentContainer, PageHeaderContainer, PageHeading} from "../views/design/PageContent";
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
      users: null,
      userId: null,
      erroMessage:null
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
        erroMessage: error.message,
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
      //this.setState({ loggedInUserId:this.props.location.state.loggedInUserId });
      const response = await api.get("/users");
      // delays continuous execution of an async operation for 1 second.
      // This is just a fake async call, so that the spinner can be displayed
      // feel free to remove it :)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Get the returned users and update the state.
      this.setState({ users: response.data });

      // This is just some data for you to see what is available.
      // Feel free to remove it.
      console.log("request to:", response.request.responseURL);
      console.log("status code:", response.status);
      console.log("status text:", response.statusText);
      console.log("requested data:", response.data);

      // See here to get more data.
      console.log(response);
    } catch (error) {
      this.setState({
        erroMessage: error.message,
      });
      //alert(`Something went wrong while fetching the users: \n${handleError(error)}`);
    }
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

              </FilterContainer>
            </PageHeaderContainer>
            <AppsContainer>

            </AppsContainer>
          </ContentContainer>
        </BaseContainer>
      </div>
    );
  }
}

export default withRouter(AppsOverview);
