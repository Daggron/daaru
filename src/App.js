import React from 'react';
import './App.css'
import FetchBeers from './utils/FetchBeers';
import ErrorBoundary from './components/ErrorBoundary'
import Home from './components/Home';

const App = ()=>{
  return(
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  )
}

export default App;