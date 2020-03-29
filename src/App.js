import React from 'react';
import './App.css'
import ErrorBoundary from './components/errorboundaries/ErrorBoundary'
import Home from './components/home/Home';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Description from './components/description/Description';

const App = ()=>{
  return(
    <BrowserRouter>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path={`/details`} component={Description} />
        </Switch>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App;