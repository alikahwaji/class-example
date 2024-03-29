import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar'

class App extends React.Component {
    state = { images: []}
    
    onSearchSubmit = async (term) => {
        const res = await axios
            .get('/search/photos', {
            params: {query: term}
        })
        this.setState({images: res.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        )
    }
}

export default App