import React from "react";
import styled from "styled-components";
import Header from "../../views/design/Header";
import {ContentContainer, PageHeaderContainer, PageHeading, PageHeaderSearchBarContainer} from "../../views/design/PageContent";
import {api, apiRecommender} from "../../helpers/api";
import { withRouter } from "react-router-dom";
import AppsCard from "./AppsCard";
import {Button} from "../../views/design/Button";
import LoadingOverlay from "react-loading-overlay";

const HeaderRecommender = styled.h2`
  
`;

const HeaderWishlistContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: gray;
`;

const HeaderWishlist = styled.h2`
  width: 25%;
  min-width: 250px;
`;

const NoAppsInWhishlistText = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const AppCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AppCardCont = styled.div`
  height: 270px;
  width: 18%;
  margin: 1%;
`;

const PlaceholoderForLoading = styled.div`
  height: 270px;
  width: 100%;
  margin-top: 10px;
`;



class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      recommendedApps: [],
      whishlistApps: [],
      isStatusRemove: false,
      appsToRemove: []
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

      console.log(response.data);

      //let appsId = ["6097f8f6845687a0fcad2e88"] "[" + appsId + "]";

      url = "/recommender?appIds=" + "[" + response.data.apps + "]";
      console.log(url);
      const responseRecommender = await apiRecommender.get(url)
        .then(response => {
          /*let newResponse = response.data.replaceAll(NaN, null);
          console.log(newResponse);
          console.log(newResponse.canApprove);
          console.log(JSON.parse(newResponse));
          this.setState({recommendedApps: JSON.parse(newResponse)});*/
          console.log(response);
          this.setState({recommendedApps: response.data});
        });



      //const obj = JSON.parse(responseRecommender);
      /*console.log(obj)

      this.setState({ recommendedApps: obj});*/

     // console.log(responseRecommender.data);


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

  pushDashboard(){
    window.location.reload(false);
  }

  setStatus(){
    console.log(this.state.appsToRemove)
    if(this.state.isStatusRemove){
      this.setState({isStatusRemove: false});
    }else{
      this.setState({isStatusRemove: true});
    }
  }

  goToDetails(app){
    console.log(app)
    this.props.history.push({
      pathname: "/appDetails",
      state: { app: app },
    });
  }

  addOrRemoveAppToAppsToRemove(app){
    let appsToRemove = this.state.appsToRemove;
    if(appsToRemove.includes(app._id)){
      let index = appsToRemove.indexOf(app._id);
      appsToRemove.splice(index, 1);
    }else{
      appsToRemove.push(app._id);
    }
    this.setState({appsToRemove: appsToRemove})
  }

  isCardChosenToBeRemoved(app){
    if(this.state.appsToRemove.includes(app._id)){
      return true;
    }else{
      return false;
    }
  }

  async removeAppsFromWishlist(){
    // api call for removing apps

    let url = "/wishlist/deleteApps"
    const requestBody = {
      apps: this.state.appsToRemove
    }
    const response = await api.put(url, requestBody,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

    url = "/wishlist/getApps"
    await api.get(url,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }

      }).then(response => {
      this.setState(
        {
          whishlistApps: response.data,
          appsToRemove: [],
          isStatusRemove: false
        });
      });


  }

  render(){
    return (
      <div>
        <Header
          pushAppsOverview={this.pushAppsOverview.bind(this)}
          pushDashboard={this.pushDashboard.bind(this)}
        />
        <ContentContainer>
          <PageHeaderContainer>
            <PageHeaderSearchBarContainer >
              <PageHeading>
                Dashboard
              </PageHeading>
            </PageHeaderSearchBarContainer>
          </PageHeaderContainer>
          <HeaderWishlistContainer>
            <HeaderRecommender>
              Recommended Apps
            </HeaderRecommender>
          </HeaderWishlistContainer>
          {this.state.recommendedApps.length === 0?
            (
              this.state.whishlistApps.length === 0?
                (
                  <NoAppsInWhishlistText>
                    Only after you added some apps to your wishlist, we can give you recommendations for additional apps.
                  </NoAppsInWhishlistText>
                ):(
                  <LoadingOverlay
                    active={true}
                    spinner
                    text='Loading ...'
                  >
                    <PlaceholoderForLoading/>
                  </LoadingOverlay>
                )
            ):(

              <AppCardsContainer>

                {this.state.recommendedApps.map((app) =>
                  {
                    return (
                      <AppCardCont
                        onClick={() => {
                          this.goToDetails(app);
                        }}
                      >
                        <AppsCard
                          key={app._id}
                          app={app}
                        />
                      </AppCardCont>

                    )
                  }
                )}
              </AppCardsContainer>

            )

          }
          <HeaderWishlistContainer>
            <HeaderWishlist>
              Whishlist with apps
            </HeaderWishlist>

            {this.state.isStatusRemove?
              (
                [
                 <Button
                  style={{minWidth: "15%", marginRight: "5%"}}
                  onClick={()=>this.setStatus()}
                >
                  Cancel
                </Button>,
                <Button
                  style={this.state.appsToRemove.length === 0? {minWidth: "15%", opacity: "0.4"} : {minWidth: "15%"}}
                  disabled={this.state.appsToRemove.length === 0}
                  onClick={()=>this.removeAppsFromWishlist()}
                >
                  Submit
                </Button>]
              ):(
                <Button
                  style={{minWidth: "15%", marginRight: "5%"}}
                  onClick={()=>this.setStatus()}
                >
                  Remove apps
                </Button>
              )
            }
          </HeaderWishlistContainer>

          {this.state.whishlistApps.length === 0?
            (
             <NoAppsInWhishlistText>
               There are not any apps in your whishlist. Go to the apps overview and add some apps!
             </NoAppsInWhishlistText>
            ):(

              <AppCardsContainer>
                {this.state.isStatusRemove?
                  (
                    <div style={{width: "100%"}}>
                      Click on the apps to mark them for removal and then remove them with a click on the submit button.
                    </div>
                  ):(
                    ""
                  )
                }

                {this.state.whishlistApps.map((app) =>
                  {
                    if(this.state.isStatusRemove){
                      return (
                        <AppCardCont
                          style={this.isCardChosenToBeRemoved(app)?{WebkitBoxShadow: `0 0 20px red`} : {WebkitBoxShadow: `0 0 0px green`}}
                          onClick={() => {
                            this.addOrRemoveAppToAppsToRemove(app);
                          }}
                        >
                          <AppsCard
                            key={app._id}
                            app={app}
                            isStatusRemove={this.state.isStatusRemove}
                          />
                        </AppCardCont>
                      )
                    }else{
                      return (
                        <AppCardCont
                          onClick={() => {
                            this.goToDetails(app);
                          }}
                        >
                          <AppsCard
                            style={{backgroundColor: "red"}}
                            key={app._id}
                            app={app}
                            isStatusRemove={this.state.isStatusRemove}

                          />
                        </AppCardCont>
                      )
                    }

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