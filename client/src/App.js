import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import { Link } from 'react-router-dom';
import layoutActions from './redux/actions/layout/layoutActions';
import MainRoutes from './routes/mainRoutes';

const App = props => {

  const actionsLayout = layoutActions();

  const test = useSelector(state => state.layoutReducer.displaySidedrawer)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Fib Calculator</h1>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div>
        <div onClick={() => actionsLayout.displaySideDrawer()}>Click me</div>
          This is the reducer working in production: {test}
      </div>
      <div>
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
