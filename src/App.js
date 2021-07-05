import {useState, useEffect } from 'react'
import React from 'react'
import "aframe"
import "aframe-gui"
import "aframe-environment-component";
import "three"
import {Menu, Button, Header, Modal, Icon, Image, Message, Divider} from 'semantic-ui-react';
import './App.css';

import { createBrowserHistory } from "history";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch, useLocation, useHistory
} from "react-router-dom"
import {Scene3D} from "./Scene3D";

import Team from "./content/Team";
import Contacts from "./content/Contacts";
import CleanMeat from "./content/CleanMeat";
import Autoimmune from "./content/Autoimmune";
import LifeExtension from "./content/LifeExtension";
import About from "./content/About";
import {Content} from "semantic-react";

export const App = () => {

    const history = createBrowserHistory()


    return (
        <Router history={history}>
        <div id="App">
            <Menu size="tiny" color="white" icon tabular fixed="top">
                <Link to="/">
                    <Menu.Item  size="tiny" name="Info" position="right">
                        <i>Use mouse and arrow or WASD keys to navigate 3D environment</i>
                    </Menu.Item>
                </Link>
                <Menu.Menu size="tiny" position="right">
                    <Link to="/about">
                        <Menu.Item  size="tiny" name="About">
                            <Header className="ui green inverted compact segment">
                                About
                            </Header>
                        </Menu.Item>
                    </Link>
                    <Link to="/meat">
                        <Menu.Item  size="tiny" name="Artificial Meat">
                            <Header className="ui green inverted compact segment">
                                Artificial meat
                            </Header>
                        </Menu.Item>
                    </Link>
                    <Link to="/immune">
                        <Menu.Item  size="tiny" name="Autoimmune Gene Therapy">
                            <Header className="ui green inverted compact segment">
                                Autoimmune gene therapy
                            </Header>
                        </Menu.Item>
                    </Link>

                    <Link to="/life-extension">
                        <Menu.Item  size="tiny" name="Life Extension">
                            <Header className="ui green inverted compact segment">

                                Life extension
                            </Header>
                        </Menu.Item>
                    </Link>
                    <Link to="/team">
                        <Menu.Item  size="tiny" name="Core Team">
                            <Header className="ui green inverted compact segment">
                                Core team
                            </Header>
                        </Menu.Item>
                    </Link>
                    <Link to="/contacts">
                        <Menu.Item  size="tiny" name="Contacts">
                            <Header className="ui green inverted compact segment">
                                Contacts
                            </Header>
                        </Menu.Item>
                    </Link>
                </Menu.Menu>



            </Menu>
            <Switch>
                <Route exact={true} path="/"> </Route>
                    <Route>
                    <Modal className="ui green inverted piled segment"
                           open={true}
                           dimmer={false} size={"large"}

                    >
                        <Modal.Header>
                            <Switch>
                                <Route path="/meat"> Cultured meat </Route>
                                <Route path="/immune"> Autoimmune Gene Therapy </Route>
                                <Route path="/life-extension"> Life Extension Research</Route>
                                <Route path="/team"> Core team </Route>
                                <Route path="/contacts"> Contacts </Route>
                            </Switch>
                        </Modal.Header>
                        <Modal.Content scrolling className="ui green segment">

                            <Modal.Description>
                                <Route path="/about"> <About></About> </Route>
                                <Route path="/meat"> <CleanMeat> </CleanMeat> </Route>
                                <Route path="/immune"><Autoimmune> </Autoimmune></Route>
                                <Route path="/life-extension"> <LifeExtension> </LifeExtension></Route>
                                <Route path="/team"> <Team> </Team> </Route>
                                <Route path="/contacts"> <Contacts> </Contacts> </Route>

                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Link to="/">
                                <Button color="white">
                                    Back <Icon name='chevron right' />
                                </Button>
                            </Link>
                        </Modal.Actions>
                    </Modal>
                </Route>
            </Switch>

            <Scene3D>

            </Scene3D>
        </div>
        </Router>

    );
}
export default App