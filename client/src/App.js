import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

const App = props => {

  const test = useSelector(state => state.testReducer.test)

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          This is the reducer working in production: {test}
          <h1 className="App-title">Fib Calculator KUBERNETES HTTPS UPDATED!!!</h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
