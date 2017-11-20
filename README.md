# NOTES RE: STRUCTURE

## In `/src` you will find the following proposed structure:

```
/components  -- shared re-usable components
    /notification
        /redux
            index.js  -- types, actions, and reducer for this component
        NotificationComponent.jsx  -- a general re-usable react component
/modules  -- where functionality specific directories live
    /alerts  --  (a specific functionality)
        /components  -- re-usable components specific to this functionality
            AlertItem.jsx  -- a re-usable component specific to this functionality
            index.js  -- a registry of all the components in this directory
        /containers  -- the knowledgeable components for this functionality
            AlertsContainer.jsx    -- a specific container
            index.js  -- a registry of all containers in this directory
        /redux  -- redux specific to this functionality
            index.js  -- types, actions, and reducers specific to this component
            selectors.js  -- (we don't have to use these, but I've read they can make testing easier, and reduce bloat in containers when performing mapStateToProps)
            tests.js
        /sagas  -- sagas specific to this functionality
            getAlerts.js  -- a saga that will get alerts
            index.js  -- a registry of all the sagas in this directory
            tests.js
/redux  -- where root reducers are composed
    rootAppReducer.js  -- combines all reducers for for the app
    rootComponentReducer.js  -- combines all reducers for components
    index.js  -- registry of root reducers
/sagas  -- where root saga is composed
    index.js  -- import all module specific sagas, and create a root saga
/store
    configureAppStore.js  -- handles creation of the main app store
    configureComponentStore.js  -- handles creation of components store
    index.js  -- exposes methods to create all stores, and send in necessary root reducers, and root middleware (like sagas)
/services  -- for all things that can be treated as services
    api.js  -- where api config, and routes are created and exposed
App.jsx  -- where react modules + standalone components are initialized, and tied together with their redux stores
```

## The problem
How should we communicate from our legacy architecture (i.e, jQuery) w/ general react components?

## The proposal
* Each component has it's own redux (i.e, `/src/components/notification/redux`
* We have a one specific store for components (configured here: `/src/store/configureComponentStore.js`, initialized in `/src/App.jsx`)
* We expose the store globally `/src/App.jsx L#16`
* We can then call `componentStore.dispatch([reduxAction](actionArgs))` from jQuery whenever we want to communicate w/ a component  (we would also have to globally expose these component redux actions for use)

---

## The problem
How should we handle async scenarios (i.e, api calls) in our newly proposed architecture?

## The proposal
We can use sagas (https://github.com/redux-saga/redux-saga)

Info on sagas in this proposal:
* Each module has their own sagas (i.e, `/src/modules/alerts/sagas/getAlerts.js`)
* We create a root saga by combining, and initializing all sagas in `/src/sagas/index.js`
* We connect sagas to redux when configuring the main app store via middleware `/src/store/configureAppStore.js`



-------------------------
Everything below this is the original readme
-------------------------


# Docker-React-Redux-boilerplate

This application has been developed with `nodejs v6.3.1`. To run it, you only need to clone the repository.

All the source code is in `src` folder:

* `components`: include the source code of all ReactJS components.
* `containers`: containers of ReactJS components. They are components too.
* `static`: static assets like images.
* `stylesheets`: page styles.
* `App.jsx`: entrypoint of the application.
* `index.html`: base template to build HTML file.

This application uses `webpack` to build assets and serve them in development mode (see next sections).

## Run the server

### Development

Use the following command to run a development server and open your browser in [http://localhost:8080](http://localhost:8080).

```bash
docker-compose up dev
```

This command will build all source code (JSX and SASS) from `src` folder and serve it. Webpack watches changes in files and reloads the page automatically.

### Production

To build assets and minify them use `npm run build`. This command will put output files into `dist` folder.

The project includes a simple `expressjs` server to serve files from `dist` folder. To run it, type `node server.js` in your console and visit [http://localhost:3000](http://localhost:3000).

You can execute both commands running:

```bash
docker-compose up production
```
