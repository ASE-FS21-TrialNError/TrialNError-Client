import React from "react";
import styled from "styled-components";
import Header from "../../views/design/Header";
import {ContentContainer, PageHeaderContainer, PageHeading, PageHeaderSearchBarContainer} from "../../views/design/PageContent";
import {api, apiRecommender} from "../../helpers/api";
import { withRouter } from "react-router-dom";
import AppsCard from "./AppsCard";
import {Button} from "../../views/design/Button";
import LoadingOverlay from "react-loading-overlay";
import {NotificationContainer, NotificationManager} from 'react-notifications';

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
      appsToRemove: [],
      areRecommendedAppsUpdated: true
    };
  }

  async getApps(){
    try{
      // fetching all the apps in the wishlist
      //console.log(localStorage.getItem("token"));
      let url = "/wishlist/getApps"
      let response = await api.get(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }

        });

      this.setState({ whishlistApps: response.data});
      //console.log(response.data);
    }catch(error){
      NotificationManager.error('Something went wrong','Error',3000);
    }
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    await this.getApps();
    await this.getRecommendedApps();

  }

  async getRecommendedApps(){
    let url, response;

    // getting all the ids of the apps in the whishlist
    try{
      url = "/wishlist/getApp/id"
      response = await api.get(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }

        });

      //console.log(response.data);
    }catch(error){
      //console.log(error);
      NotificationManager.error('Something went wrong','Error',3000);
    }


    // sending the all ids of apps in the whislist and getting back the recommended apps
    try{
      url = "/recommender?appIds=[" + response.data.apps + "]";
      //console.log(url);
      await apiRecommender.get(url)
        .then(response => {
          //console.log(response);
          this.setState({recommendedApps: response.data});
        });
    }catch(error){
      NotificationManager.error('Something went wrong','Error',3000);
    }

  }

  pushAppsOverview(){
    this.props.history.push("/appsOverview");
  }

  // reload page when user clicks on Dashboard in the header when he is on Dashboard pagee
  pushDashboard(){
    window.location.reload(false);
  }

  setStatus(){
    //console.log(this.state.appsToRemove)
    if(this.state.isStatusRemove){
      this.setState({isStatusRemove: false});
    }else{
      this.setState({isStatusRemove: true});
    }
  }

  goToDetails(app){
    //console.log(app)
    this.props.history.push({
      pathname: "/appDetails",
      state: { app: app },
    });
  }

  // adds or removes an app to/from the appsToRemove list
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
    return this.state.appsToRemove.includes(app._id);
  }

  async removeAppsFromWishlist(){
    // api call to remove apps from the wishlist
    try{
      let url = "/wishlist/deleteApps"
      const requestBody = {
        apps: this.state.appsToRemove
      }
      await api.put(url, requestBody,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
    }catch(error){
      //console.log(error);
      NotificationManager.error('Something went wrong','Error',3000);
    }


    // get the updated wishlist and the apps in it
    await this.getApps();
    this.setState(
      {
        appsToRemove: [],
        isStatusRemove: false
      });

    // also update the recommended apps
    this.setState({areRecommendedAppsUpdated: false})
    await this.getRecommendedApps();
    this.setState({areRecommendedAppsUpdated: true})
  }

  render(){
    return (
      <div>
        <NotificationContainer/>
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

          {/*recommended apps section*/}
          <HeaderWishlistContainer>
            <HeaderRecommender>
              Recommended Apps
            </HeaderRecommender>
          </HeaderWishlistContainer>

          {/*if there is no app in the wishlist text should be shown*/}
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
                    text='Generating personalized recommendations (can take up to 15 sec) ...'
                  >
                    <PlaceholoderForLoading/>
                  </LoadingOverlay>
                )
            ):(
              this.state.areRecommendedAppsUpdated?
                (
                  <AppCardsContainer>
                    {this.state.recommendedApps.map((app) =>
                      {
                        return (
                          <AppCardCont
                            key={app._id + "1"}
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
                ):(
                  <LoadingOverlay
                    active={true}
                    spinner
                    text='Updating personalized recommendations (can take up to 15 sec) ...'
                  >
                    <AppCardsContainer>
                      {this.state.recommendedApps.map((app) =>
                        {
                          return (
                            <AppCardCont
                              key={app._id + "1"}
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
                  </LoadingOverlay>
                )
            )
          }

          {/*apps in wishlist section*/}
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
                  Remove apps
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
             [<NoAppsInWhishlistText>
               There are not any apps in your whishlist. Go to the apps overview by clicking on the button below and add some apps!
             </NoAppsInWhishlistText>,

              <Button
                style={{width: "15%", minWidth: "5%"}}
                onClick={()=>{
                  this.pushAppsOverview();
                }}
              >
                Apps Overview
              </Button>
            ]
            ):(
              <AppCardsContainer>
                {this.state.isStatusRemove?
                  (
                    <div style={{width: "100%"}}>
                      Click on the apps to mark them for removal and then remove them with a click on the "Remove apps" button.
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
                          key={app._id + "1"}
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
                          key={app._id + "1"}
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