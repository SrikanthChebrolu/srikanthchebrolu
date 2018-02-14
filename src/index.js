import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route} from 'react-router'
import App from './components/App';
import Resume from "./components/resume";
import Contact from "./components/contact";
import Hobbies from "./components/hobbies";
import Jobs from "./components/jobs";
import Posts from "./components/posts";
import Projects from "./components/projects";
import Publications from "./components/publications";
import Studies from "./components/studies";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './App.css';

const theme = createMuiTheme()

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/hobbies" component={Hobbies}/>
      <Route path="/jobs" component={Jobs}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/publications" component={Publications}/>
      <Route path="/studies" component={Studies}/>
    </Router>
  </MuiThemeProvider>
), document.getElementById('app-root'));
