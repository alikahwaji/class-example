import React from 'react';
import image from '../api/image';

import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
    state = { images: []}
    
    onSearchSubmit = async (term) => {
        const res = await image.get('/search/photos', {
            params: {query: term}
        })
        this.setState({images: res.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList />>
            </div>
        )
    }
}

export default App