import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsView from './components/NewsView';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = ()=> {
 let pageSize = 6;
 const apiKey = process.env.REACT_APP_NEWS_API
 const [progress, setProgress] = useState(0);
 const [mode, setMode] = useState("light");
 

 const toggleMode = ()=>{
  if(mode ==='light'){
    setMode('dark')
    document.body.style.backgroundColor='black';
  }
  else {
    setMode('light')
    document.body.style.backgroundColor='white';
  }
} 
    return (
    <>
    <div><Router>
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
            <Switch>
          <Route exact path="/">
          <NewsView mode={mode} toggleMode={toggleMode} setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={pageSize} country="in" category="general" /> 
          </Route>
          <Route exact path="/business">
          <NewsView mode={mode} toggleMode={toggleMode} setProgress = {setProgress} apiKey = {apiKey} key="business" pageSize={pageSize} country="in" category="business" /> 
          </Route>
          <Route exact path="/entertainment">
          <NewsView mode={mode} toggleMode={toggleMode} setProgress = {setProgress} apiKey = {apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /> 
          </Route>
          <Route exact path="/science">
          <NewsView mode={mode} toggleMode={toggleMode} setProgress = {setProgress} apiKey = {apiKey} key="science" pageSize={pageSize} country="in" category="science" /> 
          </Route>
          <Route exact path="/health">
          <NewsView mode={mode} toggleMode={toggleMode} setProgress = {setProgress} apiKey = {apiKey} key="health" pageSize={pageSize} country="in" category="health" /> 
          </Route>
          <Route exact path="/sports">
          <NewsView mode={mode} toggleMode={toggleMode} setProgress = {setProgress} apiKey = {apiKey} key="sports" pageSize={pageSize} country="in" category="sports" /> 
          </Route>
          <Route exact path="/technology">
          <NewsView mode={mode} toggleMode={toggleMode} setProgress = {setProgress} apiKey = {apiKey} key="technology" pageSize={pageSize} country="in" category="technology" /> 
          </Route>
        </Switch>
 
    </Router>
    </div>
     </>
    )
}

export default App