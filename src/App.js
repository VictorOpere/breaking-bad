import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import axios from 'axios';


const App = ({getQuery}) => {

  const [items, setitems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [query, setQuery] = useState('');



  useEffect(() => {
    
    const fetchItems = async() => {

      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      // console.log(result.data)

      setitems(result.data)

      setisLoading(false)


    }

    fetchItems()
    
  }, [query]);



  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q) }/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
