import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const OtherPage = lazy(() => import('../pages/OtherPage'));
const Fib = lazy(() => import('../pages/Fib'));
const Home = lazy(() => import('../pages/Home/Home'));

const MainRoutes = props => {

    let routes = (
        <Switch>
            <Route path='/home' exact component={Home}/>
            <Route path='/otherPage' exact component={OtherPage}/>
            <Route path='/' exact component={Fib}/>
        </Switch>
    );

    return <React.Fragment>
        <Suspense fallback={<h1>Loading...</h1>}>
            {routes}
        </Suspense>
    </React.Fragment>;
};

export default MainRoutes;