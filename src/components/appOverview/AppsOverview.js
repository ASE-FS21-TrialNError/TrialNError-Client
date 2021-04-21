/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { api } from "../../helpers/api";
import { withRouter } from "react-router-dom";
import { Header } from "../../views/design/Header";
import { BaseContainer, ContentContainer, PageHeaderContainer, PageHeading, PageHeaderSearchBarContainer} from "../../views/design/PageContent";
import Modal from "../../views/design/Modal";
import placeholder from "../../views/design/image/placeholder.png";
import TableComparison from "./TableComparison";
import {PageNumbers} from "./PageNumbers";



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
  border-bottom-style: solid;
  height: 70px;
  clear: both;
  display: flex;
  align-items: center;
`;


const AppsContainer = styled.div`
`;

const SingleAppContainer = styled.div`
  height: 150px;
  display: flex;
  flex-direction: row;
  border: solid;
  border-width: thin;
  margin-bottom: 10px;
  
`;

const AppImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14%;
  padding: 5px 5px 5px 5px;
`;

const AppImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 150px;
  max-height: 150px;
`;


const AppDescriptionContainer = styled.div`
  width: 36%;
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
`;

const AppDesciptionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const AppDescriptionBody = styled.div`
  font-size: 16px;
  font-weight: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 80px;
  line-height: 20px;
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
`;

const AppTableContainer = styled.div`
  margin: 10px 10px 10px 10px;
  border-right: gray;
  border-right-style: solid;
  border-right-width: thin;
  overflow: hidden;
  height: 130px;
  padding-right: 5px;
  position: relative;
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

const PageNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

`;



class AppsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: null,
      totalPages: null,
      currentPage: null,
      nrOfAppsPerPage: 10,
      errorMessage:null,
      sex: null
    };
  }


  async componentDidMount() {
    try {

      console.log(localStorage.getItem("token"));

      const response = await api.get("/apps?page=1&limit=10",
      {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
      
      });

      this.setState({ apps: response.data.items });
      this.setState({totalPages: response.data.totalPages})
      this.setState({currentPage: 1})
      console.log("total pages", this.state.totalPages);
      console.log(response.data);
    } catch (error) {
      this.setState({
        errorMessage: error.message,
      });
      //alert(`Something went wrong while fetching the users: \n${handleError(error)}`);
    }
  }

  async updatePageNumber(value){

    console.log("page number", value);
    const url = "/apps?page=".concat(value.toString(), "&limit=", this.state.nrOfAppsPerPage.toString())
    const response = await api.get(url,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
    this.setState({apps: response.data.items });
    console.log("apps", this.state.apps);
    this.setState({totalPages: response.data.totalPages})
    this.setState({currentPage: value});
  }

  updateSex(value){
    this.setState({sex: value});
  }

  goToDetails(appId) {
    this.props.history.push({
      pathname: "/appDetails",
      state: { appId: appId },
    });
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
                  <PageNumberContainer>
                    <PageNumbers
                      updatePageNumber={this.updatePageNumber.bind(this)}
                      totalPages={this.state.totalPages}
                      currentPage={this.state.currentPage}
                    />
                  </PageNumberContainer>
                  {this.state.apps.map((app)=>{
                    return (
                      <SingleAppContainer>
                        <AppImageContainer>
                          <AppImage
                            src={placeholder} alt={'missing'}
                            onClick={() => {
                              this.goToDetails(app._id);
                            }}
                          />
                        </AppImageContainer>
                        <AppDescriptionContainer>
                          <AppDescription>
                            <AppDesciptionTitle
                              onClick={() => {
                                this.goToDetails(app._id);
                              }}
                            >
                              {app.name}
                            </AppDesciptionTitle>
                            <AppDescriptionBody>
                              {app.description}
                            </AppDescriptionBody>

                          </AppDescription>

                        </AppDescriptionContainer>
                        <AppInfoContainer>
                          <AppTableContainer>
                            <TableComparison app={app}/>
                          </AppTableContainer>
                        </AppInfoContainer>
                        <AppAddContainer>
                          bbbbbbbbbbbbbbbbbb
                        </AppAddContainer>

                      </SingleAppContainer>

                    );
                  })}
                  <PageNumberContainer>
                    <PageNumbers
                      updatePageNumber={this.updatePageNumber.bind(this)}
                      totalPages={this.state.totalPages}
                      currentPage={this.state.currentPage}
                    />
                  </PageNumberContainer>
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
