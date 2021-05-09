import React from "react";
import styled from "styled-components";
import Header from "../../views/design/Header";
import {ContentContainer, PageHeaderContainer, PageHeading, PageHeaderSearchBarContainer} from "../../views/design/PageContent";
import {api, apiRecommender} from "../../helpers/api";
import { withRouter } from "react-router-dom";
import AppsCard from "./AppsCard";


const HeaderRecommender = styled.h2`
  
`;


const HeaderWishlist = styled.h2`
  
`;

const NoAppsInWhishlistText = styled.div`
  
`;

const AppCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
      let url = "/wishlist/getApps"
      let response = await api.get(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }

        });

      this.setState({ whishlistApps: response.data});
      console.log(response.data);

      url = "/wishlist/getApp/id"
      response = await api.get(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }

        });

      url = "/recommender?appIds=" + "[6097f8f6845687a0fcad2e76]";
      response = await apiRecommender.get(url);
      this.setState({ recommendedApps: response.data});
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
          push
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
              <AppCardsContainer>
                {this.state.whishlistApps.map((app) =>
                  {
                    return (
                      <AppsCard
                        app={app}
                      />
                    )
                  }
                )}
              </AppCardsContainer>
            )

          }
        </ContentContainer>
      </div>
    )
  }
}


export default withRouter(Dashboard);