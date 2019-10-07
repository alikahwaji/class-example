import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''}

    onFormSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Car Search</label>
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar