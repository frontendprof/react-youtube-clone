# React Youtube Clone App

- npx create-react-app app-name
- semantic ui cdn inclusion

### Initial setup

1. Removing unnecessary files
2. Cleanup
3. Components folder creation

### Components

1. App component
2. SearchBar component
3. VideoList component
4. VideoItem component

### App component

1. Rendering search bar component as child component
2. Import the file in which axios instance located
3. Pass the fetched data as props to searchbar component
4. Updating state with the fetched data
5. Passing all videos to VideoList component as props

### SearchBar component

1. Creating input form from semantic
2. Wiring it up to onChange event handler, and to onInputChange event callback respectively
3. Handling default form submit
4. Render term state in passed props

### Data Loading

1. Accessing the Youtube API
2. Creating axios instance in a separate file then exporting it

### VideoList component

1. Rendering out all video props

### VideoItem component
