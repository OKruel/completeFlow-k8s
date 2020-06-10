import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import layoutActions from './redux/actions/layout/layoutActions';

const App = props => {

  const actionsLayout = layoutActions();

  const test = useSelector(state => state.layoutReducer.displaySidedrawer)

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fib Calculator KUBERNETES HTTPS UPDATED!!!</h1>
          <div onClick={() => actionsLayout.displaySideDrawer()}>Click me</div>
          This is the reducer working in production: {test}
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
