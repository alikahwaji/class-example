import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar'

class App extends React.Component {

    async onSearchSubmit(term) {
        const res = await axios
            .get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 3fca4260e8d54bbd93f1f9d7cf8af6254e9a16e4831aec2d651bf5176b7c48ba'
            }
        })
        console.log(res.data.results)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App