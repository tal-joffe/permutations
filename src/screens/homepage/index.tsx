import React from 'react';
import Results from './components/Results'

function Homepage() {
  return (
    <div className="homepage">
      <input/>
      <button>run</button>
      <Results results={['abc','acb']}/>
    </div>
  )
}

export default Homepage