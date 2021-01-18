import React from 'react'
import Header from '../components/Header';
import Aboutus from '../screens/Aboutus';
import Contactus from '../screens/Contactus';
import Courses from '../screens/Courses';
import Home from '../screens/Home';
import Resource from '../screens/Resource';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from '../components/Footer';


const Links = () => {
    return (
        <div>
            <Router>
                <Switch>

                    <Route path='/about' exact>
                        <Header />
                        <main>
                        <Aboutus />
                        </main>
                        <Footer/>
                    </Route>
                    <Route path='/contact' exact>
                        <Header />
                        <main>
                        <Contactus />
                        </main>
                        <Footer/>
                    </Route>
                    <Route path='/resource' exact>
                        <Header />
                        <main>
                        <Resource />
                        </main>
                        <Footer/>
                    </Route>
                    <Route path='/course' exact>
                        <Header />
                        <main>
                        <Courses />
                        </main>
                        <Footer/>
                    </Route>
                    <Route path='/' exact>
                        <Header />
                        <main>
                        <Home />
                        </main>
                        <Footer/>
                    </Route>

                </Switch>
            </Router>
        </div>
    )
}

export default Links
