import React from "react";
import styled from "styled-components";
import Header from "../../views/design/Header";
import {ContentContainer, PageHeaderContainer, PageHeading, PageHeaderSearchBarContainer} from "../../views/design/PageContent";
import {api} from "../../helpers/api";
import { withRouter } from "react-router-dom";
import AppsCard from "./AppsCard";


const HeaderRecommender = styled.h2`
  
`;


const HeaderWishlist = styled.h2`
  
`;

const NoAppsInWhishlistText = styled.div`
  
`;


class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      recommendedApps: null,
      whishlistApps: null
    };
  }


  async componentDidMount() {
    try {

      console.log(localStorage.getItem("token"));
      const url = "/wishlist/getApps"
      const response = await api.get(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }

        });

      this.setState({ apps: response.data});
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
            <PageHeaderSearchBarContainer >
              <PageHeading>
                Dashboard
              </PageHeading>
            </PageHeaderSearchBarContainer>
          </PageHeaderContainer>
          <HeaderRecommender>
            Recommended Apps
          </HeaderRecommender>
          {!this.state.recommendedApps ?
            (
              <NoAppsInWhishlistText>
                Only after you added some apps to your wishlist, can we give you recommendations for additional apps.
              </NoAppsInWhishlistText>
            ):(
              ""
            )

          }
          <HeaderWishlist>
            Whishlist with apps
          </HeaderWishlist>
          {!this.state.whishlistApps ?
            (
             <NoAppsInWhishlistText>
               There are not any apps in your whishlist. Go to the apps overview and add some apps!
             </NoAppsInWhishlistText>
            ):(
              <AppsCard>

              </AppsCard>
            )

          }
          <AppsCard/>
        </ContentContainer>
      </div>
    )
  }
}


export default withRouter(Dashboard);