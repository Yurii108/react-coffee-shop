import { Component } from 'react';


class Search extends Component {
    state = {
        term: ''
    }

    onUpdateSeachLocal = (e) => {
        const term = e.target.value;
        this.setState({ term })
        this.props.onUpdateSeach(term);
    }

    render() {
        return (
            <form >
                <label htmlFor="text">Lookiing for</label>
                <input type="text"
                    placeholder='start typing here...'
                    value={this.state.value}
                    onChange={this.onUpdateSeachLocal}
                />
            </form>

        )
    }
}

export default Search;