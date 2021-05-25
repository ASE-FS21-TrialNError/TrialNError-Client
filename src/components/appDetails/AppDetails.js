import React from "react";
import styled from "styled-components";
import Header from "../../views/design/Header";
import {ContentContainer, PageHeaderContainer, PageHeading, PageHeaderSearchBarContainer} from "../../views/design/PageContent";
import {TableDetailsGIC, TableDetails} from "../appOverview/TableComparison";
import {withRouter} from "react-router-dom";

const Line = styled.div`
  border-bottom-color: gray;
  border-bottom-style: solid;
`;

const GeneralInfoContainer = styled.div`
  margin-top: 10px;
`;

const AppImageGIC = styled.img`
  float: left;
  width: 200px;
  height: 200px;
  margin-right: 20px;
`;

const AppTitleGIC = styled.div`
  height: 80px;
  margin-bottom: 10px;
  font-size: 30px;
`;

const AppTitlepGIC = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Description = styled.div`
  margin-top: 10px;
  white-space: pre-line;
  margin-bottom: 30px;
`;

const ShowMoreLabel = styled.label`
  background-color: rgb(217, 217, 217);
  margin-left: 40%;
  padding: 5px 40px 5px 40px;
  border: 1px solid #5c5c5c;
  border-radius: 10px;
`;


// component which displays the apps details page
class AppDetails extends React.Component{

  state = {checked: false}

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  pushAppsOverview(){
    this.props.history.push("/appsOverview");
  }

  pushDashboard(){
    this.props.history.push("/dashboard");
  }

  handleCheckboxChange = event =>
    {this.setState({checked: event.target.checked})}
  
  render(){

    // styling of the description, how many lines are shown
    let Descriptionp = styled.p`
      display: -webkit-box;
      -webkit-line-clamp: 10;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `;
    
    let ButtonContent = "Description - Show More";

    // if the button was clicked to show more text, styling changes
    if(this.state.checked) {
      Descriptionp = styled.p`
        display: -webkit-box;
        -webkit-line-clamp: unset;
        -webkit-box-orient: vertical;
        overflow: hidden;
    `;
      ButtonContent = "Description - Collapse";
    }



    return (
      <div>
        <Header
          pushAppsOverview={this.pushAppsOverview.bind(this)}
          pushDashboard={this.pushDashboard.bind(this)}
        />
        <ContentContainer>

          {/*page header section*/}
          <PageHeaderContainer>
            <PageHeaderSearchBarContainer>
              <PageHeading>
                App Details
              </PageHeading>
            </PageHeaderSearchBarContainer>
          </PageHeaderContainer>
          <Line/>

          {/*app image and most important info off app section*/}
          <GeneralInfoContainer>
            <AppImageGIC
              src={this.props.location.state.app.logo_url} alt={'not available'}
            />
            <AppTitleGIC className="box">
              <AppTitlepGIC>
                {this.props.location.state.app.name}
              </AppTitlepGIC>
            </AppTitleGIC>
            <TableDetailsGIC app={this.props.location.state.app}/>
          </GeneralInfoContainer>

          {/*description and further details section*/}
          <Description className="box">
            <input type="checkbox" name="toggle" id="toggle" checked={this.state.checked}
            onChange={this.handleCheckboxChange} style={{display: "none"}}/>
            <Descriptionp>
              {this.props.location.state.app.description}
            </Descriptionp>
            <ShowMoreLabel for = "toggle">{ButtonContent}</ShowMoreLabel>
          </Description>
          <TableDetails app={this.props.location.state.app} />
          <br/>
        </ContentContainer>
      </div>
    )
  }
}

export default withRouter(AppDetails);