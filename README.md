# NOTES RE: STRUCTURE

## In `/src` you will find the following proposed structure:

```
/components  -- shared re-usable components
    Notification.jsx  -- a shared non-functionality specific component
    index.js  -- a registry of all the shared components
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
/redux
    index.js  -- combines all reducers into a rootReducer
/sagas
    index.js  -- combines all sagas into a rootSaga
/store
    configureStore.js  -- handles creation of the main app store
    index.js  -- exposes createStore method, and send in necessary root reducers, and root middleware (like sagas)
/services  -- for all things that can be treated as services
    api.js  -- where api config, and routes are created and exposed
    eventEmitter.js  -- creates an event emitter to bridge communication between this, and the legacy app
App.jsx  -- where react containers + standalone components are initialized
```

## The problem
How should we communicate from our legacy architecture (i.e, jQuery) w/ general react components?

## The proposal
* we use an event emitter (`/src/services/eventEmitter.js`), which is globally exposed `/src/App.jsx L#17`
* components have their own events, formatted like: 'COMPONENT/EVENT' (i.e, `/src/components/Notification.jsx L#7`)
* we globally expose all shared components (`/src/App.jsx L#22`)
* we can then do something like `eventEmitter.emit(components.Notification.EVENTS.TOGGLE, true)`

---

## The problem
How should we handle async scenarios (i.e, api calls) in our newly proposed architecture?

## The proposal
We can use sagas (https://github.com/redux-saga/redux-saga)

Info on sagas in this proposal:
* Each module has their own sagas (i.e, `/src/modules/alerts/sagas/getAlerts.js`)
* We create a root saga by combining, and initializing all sagas in `/src/sagas/index.js`
* We connect sagas to redux when configuring the main app store via middleware `/src/store/configureStore.js`



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
