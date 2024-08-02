import React from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('query') || 'No search term provided';

  return (
    <div>
      <p>No Result for {searchTerm}</p>
    </div>
  )
}

export default Search
