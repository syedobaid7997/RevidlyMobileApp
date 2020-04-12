import React from 'react';
import './App.css';
import defaultExport from 'module';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Clans from './components/Clans.js';
import Technology from './components/Technology';
import Arts from './components/Arts.js';
import Comapny2 from  './components/Comapny2.png';
import Post from './Post';
class App extends React.Component{
  
   render(){
      return(
        <div>
        <BrowserRouter>
        <a className="postoff" href='/post' >Write Something here..... </a>
          <Switch>
            <Route exact path='/post' component={Post} />
          </Switch> 
        </BrowserRouter>
        <BrowserRouter>
            <img style={{float:'left'}}src={Comapny2} width = "30" height="30" />
            <Clans />
            <Route path='/Technology' component={Technology}/> 
            <Route path='/Arts' component={Arts} /> 
        </BrowserRouter>
        </div>
      );
   }
}
export default App;