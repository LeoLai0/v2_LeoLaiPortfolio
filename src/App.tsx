// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
// import { MainPage } from './pages/MainPage'
import { BlurbDiv } from './components/BlurbDiv/BlurbDiv';
import { ContentDiv } from './components/ContentDiv/ContentDiv';

function App() {
  const [section, setSection] = useState<string>("about");

  return (
    <div className="static">
      <NavBar section={section}/>
      <div className="bg-black text-white lg:m-7 m-5 border border-white/40 overflow-y-auto lg:h-[calc(100vh-8vh)] h-[calc(100vh-4.5vh)] bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:10px_10px] z-10">
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2">
          <BlurbDiv section={section}/>
          <ContentDiv setSection={setSection} />
        </div>
      </div>
    </div>
  );
}
export default App
