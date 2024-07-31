import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import List from './components/List'
import { Information } from './components/public-environment/Information'
import Transport from './components/public-environment/Transport'
import Healt from './components/public-environment/Healt'
import Calendar from './components/public-environment/Calendar'
import Emergency from './components/public-environment/Emergency'
import EducationCenter from './components/public-education/EducationCenter'
import GreenInitiatives from './components/public-education/GreenInitiatives'
import Recycling from './components/public-education/Recycling'
import SmartChild from './components/public-education/SmartChild'
import Footprints from './components/public-education/Footprints'
import Puzzle from './components/public-education/game/Puzzle'
import GameSampah from './components/public-education/game/GameSampah'
import ChildProtection from './components/public-security/ChildProtection'
import PoliceCall from './components/public-security/PoliceCall'
import FiremanCall from './components/public-security/FiremanCall'
import Disaster from './components/public-security/Disaster'
import Traffic from './components/public-security/Traffic'
import Animation from './components/public-education/Animation'
import VirtualTour from './components/VirtualTour'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<VirtualTour />}></Route>
        {/* public environment */}
        <Route path='/Information' element={<Information />}></Route>
        <Route path='/Transport' element={<Transport />}></Route>
        <Route path='/Healt' element={<Healt />}></Route>
        <Route path='/Calendar' element={<Calendar />}></Route>
        <Route path='/Emergency' element={<Emergency />}></Route>
        {/* public educaion */}
        <Route path='/education-center' element={<EducationCenter />}></Route>
        <Route path='/green' element={<GreenInitiatives />}></Route>
        <Route path='/recycling' element={<Recycling />}></Route>
        <Route path='/smart-child' element={<SmartChild />}></Route>
        <Route path='/digital-footprints' element={<Footprints />}></Route>
        {/* game page */}
        <Route path='/smart-child/game-sampah' element={<GameSampah />}></Route>
        <Route path='/animation' element={<Animation />}></Route>
        {/* public security */}
        <Route path='/child-protection' element={<ChildProtection />}></Route>
        <Route path='/police-call-center' element={<PoliceCall />}></Route>
        <Route path='/fireman-call-center' element={<FiremanCall />}></Route>
        <Route path='/regional-disaster' element={<Disaster />}></Route>
        <Route path='/traffic' element={<Traffic />}></Route>
      </Routes>
    </Router>
  )
}

export default App