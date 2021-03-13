
import React, { Component } from 'react';
import SearchBar from './SearchBar';

import youtube from "../apis/youtube";





class App extends Component {

    state={videos:[]}

    onTermSubmit=async term=>{
        const resp=await youtube.get("/search",{
            params:{
                q:term
            }
        })
        console.log(resp.data.items);
        this.setState({videos:resp.data.items})
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                There are {this.state.videos.length} videos found.
            </div>
        )
    }
}

export default App;
