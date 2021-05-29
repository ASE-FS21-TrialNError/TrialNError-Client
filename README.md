# TrialNError-Client

## General information

This repository is part of the project AppCom and contains the code for the front end of the project. Further information
about the project can be found in the "Additional information" section. The main high level components of this 
repository are mentioned below:

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

To run the application locally, a Node.js version >= 12.10 will be needed. Node.js can be downloaded [here](https://nodejs.org).

#### `npm install`

This command has to be run before starting the application for the first time. It will install further dependencies to Node.js.

#### `npm run dev`

This command runs the application in the development mode.
Open [http://localhost:3000](http://localhost:4000) to view it in the browser.
If make changes to the code, the page will reload.

#### `npm run test`

This command starts the test runner. 
More information can be found [here](https://facebook.github.io/create-react-app/docs/running-tests).

> For macOS user running into an 'fsevents' error: https://github.com/jest-community/vscode-jest/issues/423

#### `npm run build`

This commands builds the application to the `build` folder. The application is correctly bundled and optimized for production.

For further information have a look at the section [deployment](https://facebook.github.io/create-react-app/docs/deployment).

## CI/CD pipeline

For information regarding the setup of the CI/CD pipeline of the Client repo, please refer to the specific Project Wiki [page](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/CI-CD-pipeline).

## Illustrations of the Front end 

This application consists mainly out of four parts. For each of these parts you can find a picture below.

### Login
A user can get access to the AppCom service by providing user credentials.
![Settings in the Lobby](public/Login.png)

### Apps Overview
In the Apps Overview page a user can sort and filter the apps. Furthermore, he can add them to his wishlist.
![Join Game](public/AppsOverview.png)

### Dashboard
A user can see all the apps he added to his wishlist below the recommended apps. As soon as a user adds an app to the
wishlist, he receives recommendations for other apps based on the content and rating of the apps in his wishlist.
![Join Game](public/Dashboard.png)

### App Details
A user can get additional information on each app on the App Details page.
![Join Game](public/AppDetails.png)

## Roadmap
Joining developers can contribute to the project by adding the following things:

- User can have several wishlists
- Providing the user with an overview with charts of what kind of apps he has in his whishlist, example: pie chart 
  with how many apps are for iOS, Android and both systems.
- ... any other creative extensions which increases user experience! :smile:

## Additional information (not specific to this repository)

For additional information please refer to the Project Wiki:

- [Overall project idea & motivation](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Introduction-(Project-idea-&-Motivation))
- [Data sources](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Data-selection)
- [Architecture & Technologies](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Architecture-&-Technologies)
- [MongoDB Data model](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/MongoDB-Data-model)
- [Project documentation](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Documentation)
- [Recommender system](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Recommender-system)
- [Outstanding problems & workarounds](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Outstanding-problems-&-workarounds)
- [Project plan](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Project-plan)
- [Roles & Task management](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Roles-&-Tasks-management)
- [Branch management](https://github.com/ASE-FS21-TrialNError/TrialNError-Client/wiki/Branch-management-&-Handling-of-Pull-requests)

## Authors and acknowledgment

We thank the ASE team FS21 for all the support and advice during this course.

### Authors

- [Tanzil](https://github.com/tanzilkm)
- [Vladimir](https://github.com/vldonkov)
- [Lukas](https://github.com/LukZeh)

