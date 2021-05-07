# Magic: The Gathering Card Finder

## Purpose
Random card generator built from the MTG API. Fetches cards from the MTG database, and displays them using their ImageUrl. Cards can them be searched by name using the search bar. 

### See live code here <https://wildelyssa.github.io/magic-the-gathering/> 

## Tech used
* React
* CSS3
* JS
* Magic: The Gathering API

## Features
* Fetch up to 20 cards from the MTG database
* Cards are random, refresh to get more cards
* Filters out cards which don't have an ImageUrl
* Loader for awaiting cards and data
* Basic error messages for 'no cards found'
* Type in the Search bar to find cards containing those values
* Responsive design
* Free MTG Wallpaper and Logo.png use in design

## Improvements
* Segment out Error as a separate component, and define conditional errors within that component to make the code in App.js leaner
* Instead of having to refresh screen, add a "Generate Cards" button
* Currently searches Legendary, and Creature cards: expand in the future
* Add a selector to search cards by colour
* Have a feature to save cards you are interested in
* Possible future opensource project if there is enough interest

If you have an idea for this project, or would like to contribute, please drop me a message. I am open to ideas and collaboration. 


To run the project on your machine, please download the code, cd into the folder, and run **`npm start`** in terminal

To run a production build, please run **`npm build`** in teminal

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

