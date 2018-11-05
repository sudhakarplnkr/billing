import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './DashboardContainer';

const ProjectBatch = () => <h2>Project Batch</h2>;
const AssociateDetail = () => <h2>Associate Detail</h2>;
const KtDetail = () => <h2>Kt Detail</h2>;

export const App = () => {
    return (
    <div>
        <Header />
        <Router>
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to="/">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/project-batch/">Project Batch</Link>
                            </li>
                            <li>
                                <Link to="/associate-detail/">Associate Detail</Link>
                            </li>
                            <li>
                                <Link to="/kt-detail/">Kt Detail</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route path="/" exact={true} component={Dashboard} />
                <Route path="/project-batch/" component={ProjectBatch} />
                <Route path="/associate-detail/" component={AssociateDetail} />
                <Route path="/kt-detail/" component={KtDetail} />
            </div>
        </Router>
        <Footer />
    </div>);
};
