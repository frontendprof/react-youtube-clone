
import React, { Component } from 'react';
import SearchBar from './SearchBar';

import youtube from "../apis/youtube";
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';





class App extends Component {

    state={videos:[],selectedVid:null}

    componentDidMount(){this.onTermSubmit("buildings")}

    onTermSubmit=async term=>{
        const resp=await youtube.get("/search",{
            params:{
                q:term
            }
        })
        this.setState({
            videos:resp.data.items,
            selectedVid:resp.data.items[0]
        })
    }

    onVideoSelect=(video)=>{
        this.setState({selectedVid:video});
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">

                            <VideoDetail vid={this.state.selectedVid}/>
                        </div>

                        <div className="five wide column">

                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;
