
import React from "react";
import styled from "styled-components";
import Header from "../../views/design/Header";
import {ContentContainer, PageHeaderContainer, PageHeading, PageHeaderSearchBarContainer} from "../../views/design/PageContent";
import {api} from "../../helpers/api";
import { withRouter } from "react-router-dom";

class AppDetails extends React.Component{

  async componentDidMount() {
    try {

      console.log(localStorage.getItem("token"));
      const url = "/apps/" + this.props.location.state.appId;
      const response = await api.get(url,
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

  pushAppsOverview(){
    this.props.history.push("/appsOverview");
  }

  render(){
    return (
      <div>
        <Header
          pushAppsOverview={this.pushAppsOverview.bind(this)}
        />
        <ContentContainer>
          <PageHeaderContainer>
            <PageHeaderSearchBarContainer>
              <PageHeading>
                App Details
              </PageHeading>
            </PageHeaderSearchBarContainer>
          </PageHeaderContainer>
        </ContentContainer>
      </div>
    )
  }
}


export default withRouter(AppDetails);