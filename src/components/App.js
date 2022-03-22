import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const [type, onChangeType] = useState('all')

  useEffect(() => {
    const fetcher = () => {
      let path = '';
    filters.type === 'all' ? path = '/pets' : path = `/pets?type=${filters.type}`;

    fetch(`http://localhost:3001${path}`)
    .then(resp => resp.json())
    .then(data => setPets(data))}

    fetcher()

    // cleanup
    return () => {}
  },[filters])
  
  function onFindPetsClick () {
    console.log(type)
    setFilters({type: type})
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onChangeType={onChangeType}
              onFindPetsClick={onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} setPets={setPets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
