import './App.css';
import SearchBar from './Components/SearchBar';
import Card from './Components/Card';
import Loader from './Components/Loader';
import Error from './Components/Error';
import { useEffect, useState } from 'react';

const App = () => {
  //Set State
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //API call
    const APIurl = 'https://api.magicthegathering.io/v1/cards?supertype=legendary&types=creature&gameFormat=commander&&pageSize=15&random=true';
    fetch(APIurl)
      .then((response) => response.json())
      .then((respData) => {
        setLoading(false)
        setCards(respData.cards)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
      })
  }, []);

  //search bar functionality
  const onSearchChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  //filter out cards that don't have an imageUrl
  const cardsArray = cards.filter(item => item.imageUrl);
  //search cards by name
  const filteredCards = cardsArray.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  const noCards = (filteredCards.length === 0);
  
  return (
    <div className='background'>
      <div className='logo' />
      <SearchBar onSearchChange={onSearchChangeHandler} />
      { loading ? <Loader /> :
      <div className='card-container'>
        { error 
        ? <Error/> 
        : noCards 
        ? <Error errorText="No Cards Found" /> 
        : (filteredCards.map(item =>
            <Card
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
            />
          ))} 
      </div> }
    </div>
  )
};

export default App;
