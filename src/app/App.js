import React, { Component, Suspense } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import {
    Dashboard,
    Help
} from '../components/pages/index';
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Loading from '../components/utils/Loading';
import PageNotFound from '../components/layout/PageNotFound';

let ps;
class App extends Component {
    componentDidMount() {
        if ( navigator.platform.indexOf( 'Win' ) > -1 ) {
            ps = new PerfectScrollbar( this.mainPanel );
        }
    }

    componentWillUnmount() {
        if ( navigator.platform.indexOf( 'Win' ) > -1 ) {
            ps.destroy();
            ps = null;
        }
    }

    setRef = ( node ) => {
        this.mainPanel = node;
    }

    render() {
        return <React.Fragment>
            <Header />
            <div
                className={navigator.platform.indexOf( 'Win' ) > -1 ? 'main-panel ps' : 'main-panel'}
                ref={this.setRef}
            >
                <div className="content p-4">
                    <Suspense fallback={<div><Loading /></div>}>
                        <Switch>
                            <Route exact path={["/", "/home"]}>
                                <Redirect to="/dashboard" />
                            </Route>
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/help" component={Help} />
                            <Route path="*" component={PageNotFound} />
                        </Switch>
                    </Suspense>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    }
}

export default App;