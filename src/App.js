import React  from 'react';
import {  BrowserRouter as Router, Route} from 'react-router-dom';
import StreamCreate from './components/StreamCreate';
import StreamEdit from './components/StreamEdit';
import StreamList from './components/StreamList';
import StreamShow from './components/StreamShow';
import StreamDelete from './components/StreamDelete';
import Header from './components/partials/Header';
import './App.css';




const Application = () =>  {
 
    return (
      
      <div className="ui container">
        <Router>
        
        <div> 
        <Header />
      
          <Route path='/' component={StreamList} />
          <Route path='/streams/new' component={StreamCreate} />
          <Route path='/streams/edit' component={StreamEdit} />
          <Route path='/streams/delete' component={StreamDelete} />
          <Route path='/streams/show' component={StreamShow} />
          </div>
             
        </Router>
        </div> 
         

    );
  };






export default Application;
