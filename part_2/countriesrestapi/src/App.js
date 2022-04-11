import axios from 'axios'
import { useState, useEffect } from 'react';
import Countries from './components/Countries';
import FilterCountries from './components/FilterCountries';

const App = () => {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {

        setCountries(response.data.map(country => ({
          name: country.name.common,
          capital: country.capital,
          languages: country.languages,
          area: country.area,
          flagURL: country.flags.png
        })))

      })
  }, [])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <FilterCountries
        handleSearchChange={handleSearchChange}
        newSearch={newSearch}
      />
      <Countries
        countries={countries}
        // newSearch={newSearch}
      />
    </div>
  );
}

export default App;
