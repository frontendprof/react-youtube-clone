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
6. Setting selected video to selevtedVid state, and passing it to VideoDetail component as props

### SearchBar component

1. Creating input form from semantic
2. Wiring it up to onChange event handler, and to onInputChange event callback respectively
3. Handling default form submit
4. Render term state in passed props
5. Passing selected video callback function to VideoList as prop

### Data Loading

1. Accessing the Youtube API
2. Creating axios instance in a separate file then exporting it

### VideoList component

1. Rendering out all video props
2. Passing them to VideoItem component as props
3. Passing selected video property to VideoItem as prop

### VideoItem component

1. Rendering out each video thumbnails
2. Styling a list via VideoItem.css
3. Wiring up onClick event handler to selected video

### VideoDetail component

1. Rendering out selected video title
2. Implementing conditional rendering either upon existing selected video or upon initial null value
3. Touch of style
4. Displaying a video player with iframe
5. Defaulting video selection
