import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory} from 'react-router'
import App from './components/App';
import Resume from "./components/resume/resume";
import Contact from "./components/contact";
import Hobbies from "./components/hobbies";
import Jobs from "./components/jobs/jobs";
import Posts from "./components/posts";
import Projects from "./components/projects";
import Publications from "./components/publications";
import Education from "./components/education/education";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Provider } from "react-redux";
import './App.css';
import {createStore, applyMiddleware} from "redux";

import thunkMIddleware from "redux-thunk"

import responses from './reducers/index';

import {createHistory} from "history";

const theme = createMuiTheme();


let store = createStore(
    responses,
    applyMiddleware(thunkMIddleware)
)


const appHistory = useRouterHistory(createHistory)({
    basename: ""
});

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
    <Router history={appHistory}>
      <Route path="/" component={App}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/hobbies" component={Hobbies}/>
      <Route path="/jobs" component={Jobs}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/publications" component={Publications}/>
      <Route path="/education" component={Education}/>
    </Router>
    </Provider>
  </MuiThemeProvider>
), document.getElementById('app-root'));
