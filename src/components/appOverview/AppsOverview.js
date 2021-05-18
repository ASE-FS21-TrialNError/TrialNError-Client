/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { api } from "../../helpers/api";
import { withRouter } from "react-router-dom";
import Header  from "../../views/design/Header";
import { BaseContainer, ContentContainer, PageHeaderContainer, PageHeading, PageHeaderSearchBarContainer} from "../../views/design/PageContent";
import Modal from "../../views/design/Modal";
import placeholder from "../../views/design/image/placeholder.png";
import TableComparison from "./TableComparison";
import {PageNumbers} from "./PageNumbers";
import {ButtonContainer, Button} from "../../views/design/Button";



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

const AppInfo = styled.div`
`;

const AppAddContainer = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
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
      appsInWhishlist: null,
      totalPages: null,
      currentPage: 1,
      searchString: "",
      nrOfAppsPerPage: 10,
      errorMessage:null,
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

      let url = "/wishlist/getApps"
      response = await api.get(url,
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
      this.setState({
        errorMessage: error.message,
      });
      //alert(`Something went wrong while fetching the users: \n${handleError(error)}`);
    }
  }

  async updatePageNumber(value){

    this.setState(
      {currentPage: value},
      this.getApps
      );

    /*console.log("page number", value);
    const url = "/apps?page=".concat(value.toString(), "&limit=", this.state.nrOfAppsPerPage.toString(),"&name=", this.state.searchString)
    const response = await api.get(url,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
    this.setState({apps: response.data.items });
    console.log("apps", this.state.apps);
    this.setState({totalPages: response.data.totalPages})
    this.setState({currentPage: value});*/
  }

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
      url= url + "&content_rating_ios=" + this.state.contentRatingIos;
    }
    if(this.state.contentRatingAndroid !== null){
      url= url + "&content_rating_andr=" + this.state.contentRatingAndroid;
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
  }

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

  async handleSearchRequest(value){

    this.setState(
      {searchString: value, currentPage: 1},
      this.getApps)
  }

  async addAppToWishlist(appId){
    // add API call
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

      url = "/wishlist/getApps"
      response = await api.get(url,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }

        });

      this.setState({ appsInWhishlist: response.data});


    }catch (error){
      console.log(error.response)
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
      console.log(error.response)
    }
  }

  pushAppsOverview(){
    window.location.reload(false);
  }

  pushDashboard(){
    this.props.history.push("/dashboard");
  }

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


  render() {


    return (
      <div>
        <Header
          history={this.props.history}
          pushAppsOverview={this.pushAppsOverview.bind(this)}
          pushDashboard={this.pushDashboard.bind(this)}
        />
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
                      this.handleSearchRequest(e.target.value);
                    }}
                  />
                </SearchBarContainer>
              </PageHeaderSearchBarContainer>
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
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Price iOS"}
                  heightPopUp={220}
                  widthPopUp={300}
                  heightButton={80}
                  widthButton={90}
                />
                <Modal
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Price Android"}
                  heightPopUp={220}
                  widthPopUp={300}
                  heightButton={80}
                  widthButton={120}
                />
                <Modal
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Rating Count iOS"}
                  heightPopUp={220}
                  widthPopUp={240}
                  heightButton={80}
                  widthButton={140}
                />
                <Modal
                  updateListOfApps={this.updateFilter.bind(this)}
                  name={"Rating Count Android"}
                  heightPopUp={220}
                  widthPopUp={280}
                  heightButton={80}
                  widthButton={200}
                />
              </FilterContainer>
            </PageHeaderContainer>
            <AppsContainer>
              {!this.state.apps ? (
                <h1>loading</h1>
              ) : (
                <div>
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
                            src={app.logo_url} alt={'missing'}
                            onClick={() => {
                              this.goToDetails(app);
                            }}
                          />
                        </AppImageContainer>
                        <AppDescriptionContainer>
                          <AppDescription>
                            <AppDesciptionTitle
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
                        <AppInfoContainer>
                          <AppTableContainer>
                            <TableComparison app={app}/>
                          </AppTableContainer>
                        </AppInfoContainer>
                        <AppAddContainer>
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
