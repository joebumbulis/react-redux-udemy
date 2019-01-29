# Modern React with Redux Course: UDEMY - Stephen Grider Course

## Modern React & Redux Course with react hooks!

##### HELP
- Udemy QA
- Twitter: `@ste_grider;`
- Email: `ste.grider@gmail.com`

### Section 3: Three Tenets of Components
  - Nesting:
    - a component can be shown inside of another
  - Reusability
    - we want to make components that can be easily reused through out application.
  - Configuration
    - we should be able to configure a component when it is created.

#### Section 3: Component Props:
- Parent pass data/info into children components using props
- Parent component passes down the data or components
- Child component - receives data using props (props.author, etc)
- Nested component (props.children): See `components/ApprovalCard.js`

### Section 4: Class - extending classes
 - functional React components (examples: `jsx` and `components`) are used for rendering jsx with no javascript functionality
 - _Class_ components include javascript functionality
 - extend React.Component to get access to the React library's functionality
 - React classes:
  - include  render method that returns  JSX

### Section 5: State - 'Seasons Component'
- only usable with class base Components (Technically can be used with functional components using the 'hooks' system)
- It's common to confuse props with state. :(
- *State* is a JS object that contains data relevant to a singular component
- updating state on a component causes the component to (almost) instantly rerender
- state must be initialized when a component is first created
- States can *only* be updated using the function `setState`

- Set up inside Class-based component:
  - *Initializing State*
    - every Class based comp. MUST contain the render() method
    - It CAN but doesn't have to call the (not React-specific, but javascript) constructor function and pass in the `props` arg then it MUST ALWAYS call the super(props) method.
    - this in turn replaces the React.Component constructor function with a new one including the props.
    - the inclusion of `super(props)` is decorum and MUST be done anytime the constructor fn is called
    - set state inside constructor fn using key:value pairs of initial info
  - *Updating State*
    -  inside the constructor, make the call to get the data, etc then call setState
    - `this.setState({key: value})`
    - any time to update state, you MUST call setState
    - NEVER do direct assignment to state object, ie. `this.state.lat = position.coords.latitude` EXCEPT in the initialization.
- Error Messaging:
  - gracefully handle error messages
  - update initialized state with errorMessage and empty string
  - then in render method to include logic to render the correct JSX: default: loading, or others dependent on state

### Section 6: Lifecycle Methods
- lifecycle methods can be used to initialize state in a different way then direct declaration.

- Component Lifecycle: in time order:

  - 1) constructor - optional (in the class) function to update state (necessary to declare state in component)
    - good place for state initialization
    - while you can do data loading (network calls, API calls, etc), BEST practices are that you should not fetch data in the constructor
  - 2) render - NOT optional unlike the rest of these methods.
    - return some jsx (nothing else, like fetching, network call, etc)
  - 3) `componentDidMount(`) - gets called, one time, when component is first visible
    - while waiting for setState to update
    - good place for initial data loading
    - or kick off process to get data that only needs to be fetched once
    - BEST place to do data loading - API requests, network calls, etc. While you can do data loading in the constructor, BEST place to do darta loading is in the componentDidMount() method.
  - 4) `componentDidUpdate()` - called auto any time the component updates itself
    - good place to do more data-loading when state/props change
  - 5) `componentWillUnmount()` - if for some reason the component will no longer be shown on the page, then this methods cleans up or takes away the component.
    - Good place to do cleanup (especially for non-React stuff)

  - Other lifecycle methods(rarely used)
     - shouldComponentUpdate()
     - getDerivedStateFromProps()
     - getSnapshotBeforeUpdate()

##### Refactor data loading to lifecycle methods
 - place the API call to fetch the data (that will eventually get loaded into the DOM) inside componentDidMount(), so that the constructor is only doing ONE job: setting state

##### alternate State Init
```
state = { latitude: null, errorMessage: ''}
```
SAME as
```
constructor(props) {
  super(props);

  this.state = { latitude: null, errorMessage: '' };
}
```     
- Babel builds the constructor for us...so we can just use this abbreviated code.

##### Passing State as props
- Passing state into child component using props
- create new instance of SeasonDisplay component, then pass a new prop with the state `lat={this.state.latitude}`
- 
