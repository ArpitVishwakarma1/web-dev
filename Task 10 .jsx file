
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from './components/CountryCard';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Country Guiding App</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map(country => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
