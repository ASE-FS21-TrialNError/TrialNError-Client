# Advanced Software Engineering: TrialNError AppCom

## Introduction

### Motivation
Currently, people simply download the mobile apps which are available to them depending on the operating system of the 
smartphone they use. However, some mobile apps are not available in all app stores. Moreover, an app may have better 
performance and user rating on a specific operating system (iOS vs. Android). Therefore, it makes sense to turn 
around the traditional approach and thus offer consumers the possibility to choose the smartphone they 
want depending on the mobile apps they would like to later install on it.

### Idea and Overview
Our idea is to develop a web application, which will act as a mobile app aggregator. The web application will provide 
users with an overview of different mobile apps out there (for our project, scope will be limited to apps in Google Play
Store and Apple App Store). After signing in on the website, users will be able to select the apps which interest them 
(based on various information, e.g., price, rating, etc.) and add them to their personal “Apps list”.
This should make it easier for users to decide whether their future smartphone should run on iOS or Android and which 
apps exactly should they install on it. In addition to the “Apps list”, complementary app recommendations will be shown. 
Those recommendations will be based on the selected apps in the “Apps list”, using a content-filtering technique. 

## Technologies

- **[React-js](https://reactjs.org/)**: React-js is a framwork for building JavaScript user interfaces in a 
  component-based way.
- **[NestJS](https://nestjs.com/)**: NestJS is a framework for building efficient, scalable Node.js web applications.
  component-based way. (backend)
- **[Docker](https://nestjs.com/)**: Docker is a set of platform as a service products that use OS-level virtualization 
  to deliver software in packages called containers.
- **[SonarCloud](https://sonarcloud.io/)**: SonarCloud enhances the workflow with continuous code quality by 
  automatically analyzing and decorating pull requests on GitHub, Bitbucket etc.

axios

## High-level components

- **[Login/Registration/EmailVerfication](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/tree/main/src/components)**: 
  Users can register and login to the application.
- **[Apps Overview](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/blob/main/src/components/appOverview/AppsOverview.js)**: 
  Users can filter the apps by name, category, rating, content rating, price, rating count. Furthermore, users can sort 
  the apps and add them to their wishlist. By clicking on a particular app, they can see the details of the app in the 
  "App Details" page.

- **[Dashboard](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/blob/main/src/components/dashboard/Dashboard.js)**:
  Users can see their wishlist with the apps added and receive recommended apps apps based on the content of the apps
  in the wishlist. In addition, user can remove apps in the whishlist.

- **[App Details](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/blob/main/src/components/appDetails/AppDetails.js)**: 
  User can see all the detailed information of a particular app.

**User control flow**: An unregistered user can register on the Registration page. After
the registration the user will be directed to the Email Verification page, where the user should enter the code he received 
by email. After successful verification, the user arrives at the Apps Overview page where he can filter the displayed apps and 
add apps to his whishlist. If the user goes to Dashboard page after he added apps to his whishlist, he can see these apps in the
whishlist in the Dashboard. Based on the apps in the wishlist, the user will get a list of recommended above the whishlist. 
If a user wants more information for a particular app, he can click on the picture or the heading of the apps so he will 
be directed to the App Details page where all the additional information is displayed.


## Launch & Deployment - for joining developers

To run the application locally, a Node.js version >= 12.10 will be need. Node.js can be downloaded [here](https://nodejs.org).
Further dependencies will be installed with:
#### `npm install`

This command has to be run before starting the application for the first time.

#### `npm run dev`

This command runs the application in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
If make changes to the code, the page will reload.

#### `npm run test`

This command starts the test runner. 
More information can be found [here](https://facebook.github.io/create-react-app/docs/running-tests).

> For macOS user running into an 'fsevents' error: https://github.com/jest-community/vscode-jest/issues/423

#### `npm run build`

This commands builds the application and i
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Illustrations of AppCom


## Roadmap
Joining developers can contribute to the project by adding the following things:

- User can have several wishlists
- Providing the user with an overview with charts of what kind of apps he has in his whishlist, example: pie chart 
  with how many apps are for iOS, Android and both systems.
- ... any other creative extensions which increases user experience! :smile:

## Authors and acknowledgment

We thank the ASE team FS21 for the support and course.

### Authors

- [Tanzil](https://github.com/tanzilkm)
- [Vladimir](https://github.com/vldonkov)
- [Lukas](https://github.com/LukZeh)



## License

The project is licensed under the Apache License 2.0. For more information check [this :page_with_curl:](https://github.com/sopra-fs21-group-11/sopra-client/blob/master/LICENSE) out.













### External packages

### how to run in development

### how to deploy

