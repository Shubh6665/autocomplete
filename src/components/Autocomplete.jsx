import React, { useState } from 'react';
import { debounce } from 'lodash';
import { useEffect, useCallback } from 'react';

import '/src/App.css';

const fetchProducts = async (query, setResults, setLoading, setError) => {
  try {
    setLoading(true);
    setError(null); 
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=10&skip=0`);
    const data = await res.json();
    setResults(data.products);
  } catch (err) {
    setError('Failed to fetch products.');
  } finally {
    setLoading(false);
  }
};


function Autocomplete() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

// Debounced function
  const debouncedFetch = useCallback(
    debounce((value) => {
      if (value.length >= 2) {
        fetchProducts(value, setResults, setLoading , setError);
      } else {
        setResults([]);
        setError(null);
      }
    }, 300),
    []
  );
  useEffect(() => {
    debouncedFetch(query);
  }, [query]);

  return (
    <div className='autocomBox'>

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='inputBox'
      />

      {loading ? (
        <p style={{ padding: '8px' }}>Loading...</p>
       ) : error ? (
        <p style={{ color: 'red', padding: '8px' }}>{error}</p>
       ) : query.length >= 2 && results.length === 0 ? (
        <p style={{ padding: '8px', color: '#666' }}>No matching products found.</p>
       ) : results.length > 0 ? (
        <ul className='resultsList'>
          {results.map((item) => (
            <li key={item.id} className='listKey'>
              {item.title}
            </li>
          ))}
        </ul>
      ) : null}

    </div>
  );
}

export default Autocomplete;
