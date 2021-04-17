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
import placeholder from "../views/design/image/placeholder.png";

const PageHeaderSearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SearchBarContainer = styled.div`
  float: right;
  width: 700px;
  height: 70px;
`;

const SearchBar = styled.input`
  &::placeholder {
    color: rgb(92, 92, 92);
  }
  font-size: 16px;
  height: 40px;
  padding-left: 15px;
  border: 1px solid #5c5c5c;
  margin-bottom: 20px;
  margin-left: -4px;
  margin-top: 5px;
  border-radius: 10px;

  min-height: 35px;
  min-width: 600px;
`;

const FilterContainer = styled.div`
  border-bottom-color: gray;
  border-bottom: solid;
  background: yellow;
  height: 70px;
  clear: both;
  display: flex;
  align-items: center;
`;


const AppsContainer = styled.div`
`;

const SingleAppContainer = styled.div`
  height: 150px;
  background-color: aqua;
  display: flex;
  flex-direction: row;
  border: solid;
  border-width: thin;
  margin-bottom: 5px;
  
`;

const AppImageContainer = styled.div`
  width: 15%;
  max-width: 150px;
  background-color: darkkhaki;
  padding: 5px 5px 5px 5px;
`;

const AppImage = styled.img`
  height: 100%;
  width: 100%;
`;


const AppDescriptionContainer = styled.div`
  width: 35%;
  background-color: rebeccapurple;
`;


const AppDescription = styled.div`
  margin: 10px 10px 10px 10px;
  border-right: gray;
  border-right-style: solid;
  border-right-width: thin;
  overflow: hidden;
  height: 130px;
  padding-right: 5px;
  position: relative;
  background-color: aqua;
`;

const AppDesciptionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: chocolate;
`;

const AppDescriptionBody = styled.div`
  font-size: 16px;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 80px;
  line-height: 20px;
  background-color: antiquewhite;
  position: relative;
`;

const FadeOutElement = styled.div`
  position: absolute;
  height: 500px;
  width: 500px;
  background-color: red;
  z-index: 9;
`;

const AppInfoContainer = styled.div`
  width: 35%;
  background-color: brown;
`;

const AppInfo = styled.div`
`;

const AppAddContainer = styled.div`
  width: 15%;
  background-color: gold;
`;

const AppAdd = styled.div`
`;

const SortButton = styled.div`
  background-color: rgb(220,220,220);
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
        .get("/users/logout/" + localStorage.getItem("loginUserId"))
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
      localStorage.removeItem("loginUserId");
      this.props.history.push("/login");
    }
  }

  async componentDidMount() {
    try {

      console.log(localStorage.getItem("token"));

      const response = await api.get("/apps?page=2&limit=10&category_andr=",
      {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
      
      });

      this.setState({ apps: response.data.items });

      
     
      console.log(response.data);
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
              <PageHeaderSearchBarContainer>
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
              </PageHeaderSearchBarContainer>
              
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
                <h1>
                  {this.state.apps.map((app)=>{
                    return (
                      <SingleAppContainer>
                        <AppImageContainer>
                          <AppImage src={placeholder} alt={'missing'}/>
                        </AppImageContainer>
                        <AppDescriptionContainer>
                          <AppDescription>
                            <AppDesciptionTitle>
                              {app.name}
                            </AppDesciptionTitle>
                            <AppDescriptionBody>
                              {app.description}
                              <FadeOutElement>
                                asdfasdf
                              </FadeOutElement>
                            </AppDescriptionBody>

                          </AppDescription>

                        </AppDescriptionContainer>
                        <AppInfoContainer>
                          asldfalskdjfl
                        </AppInfoContainer>
                        <AppAddContainer>
                          bbbbbbbbbbbbbbbbbb
                        </AppAddContainer>

                      </SingleAppContainer>

                    );
                  })}

                </h1>
              )}
            </AppsContainer>
          </ContentContainer>
        </BaseContainer>
      </div>
    );
  }
}

export default withRouter(AppsOverview);
