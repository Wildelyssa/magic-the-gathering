import './SearchBar.css';

const SearchBar = (props) => {

    return (
        <div className='search-container'>
            <input onChange={props.onSearchChange} type='search' placeholder='Search Cards...'></input>
        </div>
    )
};

export default SearchBar;