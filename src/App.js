import React from 'react';
import Appbar from './pages/components/Appbar';
import CreativeProductpromo from './pages/CreativeProductpromo';
import DesignandIluustration from './pages/DesignandIluustration';
import ContentCreation from './pages/ContentCreation';
import Socialmedia from './pages/Socialmedia';
// import servexxx from './pages/servexxx';
import  Webdev_service  from './pages/Webdev_service';
import Home from './pages/Home';
import "material-icons"
import "@fontsource/readex-pro"
import './App.css';

const App=()=> {
  return (
    <div className="App">
      {/* <Appbar/> */}
      {/* <Home/> */}
      {/* <Webdev_service/> */}
      <Socialmedia/>
      {/* <servexxx/> */}
      {/* <ContentCreation/> */}
      {/* <DesignandIluustration/> */}
      {/* <CreativeProductpromo/> */}
    </div>
  );
}

export default App;
