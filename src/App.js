import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "../src/components/pages/Home/style.css";
import Home from './components/pages/Home/home';
import Benguluru from './components/pages/Bengalore/bengalore';
 import First from './components/pages/Bengalore/innerbeng/first';
import Goa from './components/pages/Goa/Goa';
import Kolkatta from './components/pages/kokallta/kolkatta';
import Singapore from './components/pages/singapore/singapore';
import InnerGoa from './components/pages/Goa/innergoa';
import Innerkol from './components/pages/kokallta/innerkol';
import Malaysia from './components/pages/malaysia/malaysia';
import Bangkok from './components/pages/Bangkok/bangkok';
import New_York from './components/pages/new yor/new-york';
import Paris from './components/pages/paris/paris';

class App extends Component {
  render() {
    return (
       <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/bengaluru'element={<Benguluru/>}/>
          <Route path='/bengalore/content' element={<First/>}/> 
          <Route path='/Goa' element={<Goa/>}/>
          <Route path='/kolkata' element={<Kolkatta/>}/>
          <Route path='/malaysia' element={<Malaysia/>}/>
          <Route path='/bangkok' element={<Bangkok/>}/>
          <Route path='/paris' element={<Paris/>}/>
          <Route path='/new-york' element={<New_York/>}/>
          <Route path='/singapore' element={<Singapore/>}/>
          <Route path='/Goa/content' element={<InnerGoa/>}/>  
          <Route path='/kolkatta/content' element={<Innerkol/>}/>
        </Routes>
      </BrowserRouter>
       </>
    );
  }
}
export default App;