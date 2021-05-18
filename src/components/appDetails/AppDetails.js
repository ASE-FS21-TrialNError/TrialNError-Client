import React from "react";
import styled from "styled-components";
import Header from "../../views/design/Header";
import {ContentContainer, PageHeaderContainer, PageHeading, PageHeaderSearchBarContainer} from "../../views/design/PageContent";
import {TableDetailsGIC, TableDetails} from "../appOverview/TableComparison";
import placeholder from "../../views/design/image/placeholder.png";
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

class AppDetails extends React.Component{

  state = {checked: false}

  pushAppsOverview(){
    this.props.history.push("/appsOverview");
  }

  pushDashboard(){
    this.props.history.push("/dashboard");
  }

  handleCheckboxChange = event =>
    {this.setState({checked: event.target.checked})}
  
  render(){

    let Descriptionp = styled.p`
      display: -webkit-box;
      -webkit-line-clamp: 10;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `;
    
    let ButtonContent = "Description - Show More";

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
          <PageHeaderContainer>
            <PageHeaderSearchBarContainer>
              <PageHeading>
                App Details
              </PageHeading>
            </PageHeaderSearchBarContainer>
          </PageHeaderContainer>
          <Line/>
          <GeneralInfoContainer>
            <AppImageGIC
              src={this.props.location.state.app.logo_url} alt={'missing'}
            />
            <AppTitleGIC class="box">
              <AppTitlepGIC>
                {this.props.location.state.app.name}
              </AppTitlepGIC>
            </AppTitleGIC>
            <TableDetailsGIC app={this.props.location.state.app}/>
          </GeneralInfoContainer>
          <Description class="box">
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