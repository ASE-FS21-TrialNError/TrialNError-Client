/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { api } from "../../helpers/api";
import { withRouter } from "react-router-dom";
import Header  from "../../views/design/Header";
import { BaseContainer, ContentContainer, PageHeaderContainer, PageHeading, PageHeaderSearchBarContainer} from "../../views/design/PageContent";
import Modal from "../../views/design/Modal";
import TableComparison from "./TableComparison";
import {PageNumbers} from "./PageNumbers";
import {ButtonContainer, Button} from "../../views/design/Button";
import {sortingData} from "../../helpers/FilterCategoryData";
import {NotificationContainer, NotificationManager} from 'react-notifications';



const SearchBarContainer = styled.div`
  float: right;
  width: 650px;
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
  &:hover{
    cursor: pointer;
  }
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
  &:hover{
    cursor: pointer;
  }
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


const AppAddContainer = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

`;

const TextOfActivatedFilters = styled.div`
`;

const AppsPerPageContainer = styled.div`
  font-size: 16px;
`;

const AppsPerPageLabel = styled.div`
`;

const NrOfAppsPerPageDropdown = styled.select`
  font-size: 16px;
`;


class AppsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: null,
      appsInWhishlist: null,
      totalPages: null,
      currentPage: 1,
      searchString: "",
      nrOfAppsPerPage: 10,
      wayOfSorting: null,
      categoryIos: null,
      categoryAndroid: null,
      ratingIos: {
        min: null,
        max: null
      },
      ratingAndroid: {
        min: null,
        max: null
      },
      contentRatingIos: null,
      contentRatingAndroid: null,
      priceIos: {
        min: null,
        max: null
      },
      priceAndroid: {
        min: null,
        max: null
      },
      ratingCountIos: {
        min: null,
        max: null
      },
      ratingCountAndroid: {
        min: null,
        max: null
      }
    };
  }




  async componentDidMount() {

    try {

      // fetching the first apps when user gets to this page, as well as how many pages there are
      console.log(localStorage.getItem("token"));
      let response = await api.get("/apps?page=1&limit=10",
      {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
      
      });

      this.setState({ apps: response.data.items });
      this.setState({totalPages: response.data.totalPages});
      this.setState({currentPage: 1});
      console.log("total pages", this.state.totalPages);
      console.log(response.data);

      // get all apps which are in the wish list from the backend, so we know if we should display
      // add app to wishlist or remove app from wishlist
      let url = "/wishlist/getApps"
      await api.get(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }

        })
        .then(response =>{
          console.log(response.data);
          this.setState({ appsInWhishlist: response.data})
        }
      );
    } catch (error) {
      NotificationManager.error('Something went wrong','Error',3000);
    }
  }

  async updatePageNumber(value){
    this.setState(
      {currentPage: value},
      this.getApps
      );

  }

  // generates the correct url with the filtering criteria in it to get the correct apps from the backend
  async getApps(){

    let url = "/apps?page=" + this.state.currentPage + "&limit=" + this.state.nrOfAppsPerPage;
    console.log(this.state.categoryIos)
    if( this.state.wayOfSorting !== null){
      url = url + "&sort=" + this.state.wayOfSorting;
    }
    if(this.state.categoryIos !== null){
      url = url + "&category_ios=" + this.state.categoryIos;
    }
    if(this.state.categoryAndroid !== null){
      url = url + "&category_andr=" + this.state.categoryAndroid;
    }
    if(this.state.ratingIos.min !== null && this.state.ratingIos.max !== null){
      url = url + "&rating_ios=" + this.state.ratingIos.min + "_" + this.state.ratingIos.max;
    }
    if(this.state.ratingAndroid.min !== null && this.state.ratingAndroid.max !== null){
      url=url + "&rating_ios=" + this.state.ratingAndroid.min + "_" + this.state.ratingAndroid.max;
    }
    if(this.state.contentRatingIos !== null){
      url= url + "&content_rating_ios=" + encodeURIComponent(this.state.contentRatingIos);
    }
    if(this.state.contentRatingAndroid !== null){
      url= url + "&content_rating_andr=" + encodeURIComponent(this.state.contentRatingAndroid);
    }
    if(this.state.priceIos.min !== null && this.state.priceIos.max !== null){
      url= url + "&price_ios=" + this.state.priceIos.min + "_" + this.state.priceIos.max;
    }
    if(this.state.priceAndroid.min !== null && this.state.priceAndroid.max !== null){
      url= url + "&price_andr=" + this.state.priceAndroid.min + "_" + this.state.priceAndroid.max;
    }
    if(this.state.ratingCountIos.min !== null && this.state.ratingCountIos.max !== null){
      url= url + "&rating_count_ios=" + this.state.ratingCountIos.min + "_" + this.state.ratingCountIos.max;
    }
    if(this.state.ratingCountAndroid.min !== null && this.state.ratingCountAndroid.max !== null){
      url= url + "&rating_count_andr=" + this.state.ratingCountAndroid.min + "_" + this.state.ratingCountAndroid.max;
    }
    if(this.state.searchString !== ""){
      url = url + "&name=" + this.state.searchString
    }

    try{
      console.log(url);

      const response = await api.get(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

      console.log(response);

      this.setState({apps: response.data.items });
      this.setState({totalPages: response.data.totalPages});
    }catch(error){
      console.log(error);
      NotificationManager.error('Something went wrong','Error',3000);
    }

  }

  // updates the state of the filters in this component, is passed down to subcomponent
  updateFilter(key, value){
    console.log(key, value);
    this.setState(
      {[key]: value,
      currentPage: 1},
      this.getApps
      );
  }


  goToDetails(app) {
    this.props.history.push({
      pathname: "/appDetails",
      state: { app: app },
    });
  }

  // sets the state of string entered in the search bar
  async handleSearchRequest(value){
    this.setState(
      {searchString: value, currentPage: 1},
      this.getApps)
  }

  async addAppToWishlist(appId){
    console.log(appId);
    try{
      let url = "/wishlist/add/" + appId;
      console.log(url);
      let response = await api.get(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
      console.log(response);

      // get the updated wishlist for displaying the correct button: "add to wishlist" or "remove from whishlist"
      url = "/wishlist/getApps"
      response = await api.get(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }

        });
      this.setState({ appsInWhishlist: response.data});

    }catch (error){
      console.log(error.response);
      NotificationManager.error('Something went wrong','Error',3000);
    }
  }

  async removeAppFromWishlist(appId){
    // add API call
    console.log(appId);
    try{
      let url = "/wishlist/delete/" + appId;
      console.log(url);
      let response = await api.get(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });


      console.log(response);
      // get the updated wishlist for displaying the correct button: "add to wishlist" or "remove from whishlist"
      url = "/wishlist/getApps"
      response = await api.get(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }

        });

      console.log(response);
      this.setState({ appsInWhishlist: response.data});


    }catch (error){
      console.log(error.response);
      NotificationManager.error('Something went wrong','Error',3000);
    }
  }

  // if appsOverview is clicked in the header the page is reloaded
  pushAppsOverview(){
    window.location.reload(false);
  }

  pushDashboard(){
    this.props.history.push("/dashboard");
  }

  // checks if the app in the parameter is in the wishlist
  isAppInWhishlist(app){
    let found = false;
    for(let i = 0; i < this.state.appsInWhishlist.length; i++) {
      if (this.state.appsInWhishlist[i]._id === app._id) {
        found = true;
        break;
      }
    }
    return found;
  }

  // displays either the button "add to wishlist" or "remove from whishlist"
  displayCorrectButton(app){
    if(this.isAppInWhishlist(app)){
      return(
        <ButtonContainer style={{marginTop: "0", width: "80%"}}>
          <Button
            style={{width: "100%", backgroundColor: "rgb(94,120,135)"}}
            onClick={()=>this.removeAppFromWishlist(app._id)}
          >
            Remove from wishlist
          </Button>
        </ButtonContainer>
      )
    }else{
      return (
        <ButtonContainer style={{marginTop: "0", width: "80%"}}>
          <Button
            style={{width: "100%"}}
            onClick={()=>this.addAppToWishlist(app._id)}
          >
            Add to wishlist
          </Button>
        </ButtonContainer>
      )
    }

  }

  // displays a list with active filters
  showCorrectFilterText(){
    let displayedText = [];
    if( this.state.wayOfSorting !== null){
      displayedText.push("- Sort: " + sortingData[this.state.wayOfSorting]);
    }
    if(this.state.categoryIos !== null){
      displayedText.push("- Category iOS: " + this.state.categoryIos);
    }
    if(this.state.categoryAndroid !== null){
      displayedText.push("- Category Android: " + this.state.categoryAndroid);
    }
    if(this.state.ratingIos.min !== null && this.state.ratingIos.max !== null){
      displayedText.push("- Rating iOS: " + this.state.ratingIos.min + " to " + this.state.ratingIos.max);
    }
    if(this.state.ratingAndroid.min !== null && this.state.ratingAndroid.max !== null){
      displayedText.push("- Rating Android: " + this.state.ratingAndroid.min + " to " + this.state.ratingAndroid.max);
    }
    if(this.state.contentRatingIos !== null){
      displayedText.push("- Content Rating iOS: " + this.state.contentRatingIos);
    }
    if(this.state.contentRatingAndroid !== null){
      displayedText.push("- Content Rating Android: " + this.state.contentRatingAndroid);
    }
    if(this.state.priceIos.min !== null && this.state.priceIos.max !== null){
      displayedText.push("- Price iOS: " + this.state.priceIos.min + " to " + this.state.priceIos.max);
    }
    if(this.state.priceAndroid.min !== null && this.state.priceAndroid.max !== null){
      displayedText.push("- Price Android: " + this.state.priceAndroid.min + " to " + this.state.priceAndroid.max);
    }
    if(this.state.ratingCountIos.min !== null && this.state.ratingCountIos.max !== null){
      displayedText.push("- Rating Count iOS" + this.state.ratingCountIos.min + " to " + this.state.ratingCountIos.max);
    }
    if(this.state.ratingCountAndroid.min !== null && this.state.ratingCountAndroid.max !== null){
      displayedText.push("- Rating Count Android" + this.state.ratingCountAndroid.min + " to " + this.state.ratingCountAndroid.max);
    }
    if(this.state.searchString !== ""){
      displayedText.push("- Search bar: " + this.state.searchString);
    }
    return (
      <TextOfActivatedFilters>
        {displayedText.length === 0?
          (
            ""
          ):(
            "Currently, the following filters are active:"
          )
        }
        {displayedText.map(filter =>{
          return(
            <div>
              {filter}
            </div>
          );
        })}
      </TextOfActivatedFilters>
    )

  }

  setNrOfAppsPerApps(nrOfAppsPerPage){
    console.log(nrOfAppsPerPage);
    this.setState({nrOfAppsPerPage: nrOfAppsPerPage}, this.getApps);
  }

  render() {


    return (
      <div>
        <NotificationContainer/>
        <Header
          history={this.props.history}
          pushAppsOverview={this.pushAppsOverview.bind(this)}
          pushDashboard={this.pushDashboard.bind(this)}
        />
        <BaseContainer>
          <ContentContainer>
            <PageHeaderContainer>

              {/*header and searchbar section*/}
              <PageHeaderSearchBarContainer>
                <PageHeading>
                  Apps Overview
                </PageHeading>
                <SearchBarContainer>
                  <SearchBar
                    placeholder="Enter the name of the app here..."
                    onChange={(e) => {
                      this.handleSearchRequest(e.target.value);
                    }}
                  />
                </SearchBarContainer>
                <AppsPerPageContainer>
                  <AppsPerPageLabel>
                    Number of apps per page:
                  </AppsPerPageLabel>
                  <NrOfAppsPerPageDropdown
                    value={this.state.nrOfAppsPerPage}
                    onChange={(e)=>this.setNrOfAppsPerApps(e.target.value)}
                  >
                    <option value={"10"}>10</option>
                    <option value={"20"}>20</option>
                    <option value={"50"}>50</option>
                    <option value={"100"}>100</option>
                  </NrOfAppsPerPageDropdown>
                </AppsPerPageContainer>

              </PageHeaderSearchBarContainer>

              {/*filter section*/}
              <FilterContainer>
                <Modal
                  filterState={this.state.wayOfSorting}
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Sort"}
                  heightPopUp={280}
                  widthPopUp={600}
                  heightButton={80}
                  widthButton={80}
                />
                <Modal
                  filterState={this.state.categoryIos}
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Category iOS"}
                  heightPopUp={320}
                  widthPopUp={800}
                  heightButton={80}
                  widthButton={120}
                  nrOfColumns={3}
                />
                <Modal
                  filterState={this.state.categoryAndroid}
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Category Android"}
                  heightPopUp={400}
                  widthPopUp={800}
                  heightButton={80}
                  widthButton={120}
                  nrOfColumns={3}
                />
                <Modal
                  filterState={this.state.ratingIos}
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Rating iOS"}
                  heightPopUp={300}
                  widthPopUp={110}
                  heightButton={80}
                  widthButton={100}
                  nrOfColumns={1}
                />
                <Modal
                  filterState={this.state.ratingAndroid}
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Rating Android"}
                  heightPopUp={300}
                  widthPopUp={100}
                  heightButton={80}
                  widthButton={120}
                  nrOfColumns={1}
                />
                <Modal
                  filterState={this.state.contentRatingIos}
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Content Rating iOS"}
                  heightPopUp={300}
                  widthPopUp={150}
                  heightButton={80}
                  widthButton={150}
                  nrOfColumns={1}
                />
                <Modal
                  filterState={this.state.contentRatingAndroid}
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Content Rating Android"}
                  heightPopUp={300}
                  widthPopUp={150}
                  heightButton={80}
                  widthButton={220}
                  nrOfColumns={1}
                />
                <Modal
                  filterState={this.state.priceIos}
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Price iOS"}
                  heightPopUp={220}
                  widthPopUp={300}
                  heightButton={80}
                  widthButton={90}
                />
                <Modal
                  filterState={this.state.priceAndroid}
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Price Android"}
                  heightPopUp={220}
                  widthPopUp={300}
                  heightButton={80}
                  widthButton={120}
                />
                <Modal
                  filterState={this.state.ratingCountIos}
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Rating Count iOS"}
                  heightPopUp={220}
                  widthPopUp={240}
                  heightButton={80}
                  widthButton={140}
                />
                <Modal
                  filterState={this.state.ratingCountAndroid}
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Rating Count Android"}
                  heightPopUp={220}
                  widthPopUp={280}
                  heightButton={80}
                  widthButton={200}
                />
              </FilterContainer>
            </PageHeaderContainer>

            {/*body section with page numbers and apps*/}
            <AppsContainer>
              {!this.state.apps ? (
                <h1>loading</h1>
              ) : (
                <div>
                  {this.showCorrectFilterText()}
                  <PageNumberContainer>
                    <PageNumbers
                      updatePageNumber={this.updatePageNumber.bind(this)}
                      totalPages={this.state.totalPages}
                      currentPage={this.state.currentPage}
                    />
                  </PageNumberContainer>
                  {this.state.apps.map((app)=>{
                    return (
                      <SingleAppContainer
                        key={app._id + "appCon"}
                      >
                        <AppImageContainer
                          key={app._id + "imageCon"}
                        >
                          <AppImage
                            key={app._id + "image"}
                            src={app.logo_url} alt={'not available'}
                            onClick={() => {
                              this.goToDetails(app);
                            }}
                          />
                        </AppImageContainer>
                        <AppDescriptionContainer
                          key={app._id + "appDescCon"}
                        >
                          <AppDescription
                            key={app._id + "appDesc"}
                          >
                            <AppDesciptionTitle
                              key={app._id + "appDescTitle"}
                              onClick={() => {
                                this.goToDetails(app);
                              }}
                            >
                              {app.name}
                            </AppDesciptionTitle>
                            <AppDescriptionBody>
                              {app.description}
                            </AppDescriptionBody>
                          </AppDescription>
                        </AppDescriptionContainer>
                        <AppInfoContainer
                          key={app._id + "appInfoCon"}
                        >
                          <AppTableContainer
                            key={app._id + "appTableCon"}
                          >
                            <TableComparison
                              key={app._id + "tableComp"}
                              app={app}
                            />
                          </AppTableContainer>
                        </AppInfoContainer>
                        <AppAddContainer
                          key={app._id + "addCon"}
                        >
                          {this.state.appsInWhishlist === null?
                            (
                              ""
                            ):(
                              this.displayCorrectButton(app)

                            )
                          }
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
                </div>

              )}
            </AppsContainer>
          </ContentContainer>
        </BaseContainer>
      </div>
    );
  }
}

export default withRouter(AppsOverview);
