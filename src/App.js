import React from 'react';
import './App.css';
import Appbar from './pages/components/Appbar';
import CreativeProductpromo from './pages/CreativeProductpromo';
import DesignandIluustration from './pages/DesignandIluustration';
import ContentCreation from './pages/ContentCreation';
import Socialmedia from './pages/Socialmedia';
import  Webdev_service  from './pages/Webdev_service';
import Home from './pages/Home';

const App=()=> {
  return (
    <div className="App">
      <Appbar/>
      <Home/>
      {/* <Webdev_service/> */}
      {/* <Socialmedia/> */}
      {/* <ContentCreation/> */}
      {/* <DesignandIluustration/> */}
      {/* <CreativeProductpromo/> */}
    </div>
  );
}

export default App;
