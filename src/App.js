import './App.css';
import MenuBar from './menu/MenuBar';
import { useRef } from 'react';
import Project from './routePage/project';
import Home from './routePage/home';
import Archiving from './routePage/Archiving';
import Skills from './routePage/skills';

function App() {
  const HomeRef = useRef(null);
  
  const moveHandler = () => {
    console.log(HomeRef);
    HomeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="app-container">
      <MenuBar move={moveHandler}/>
      <Home />
      <Skills />
      <Project ref={HomeRef} />
    </div>
  );
}

export default App;
