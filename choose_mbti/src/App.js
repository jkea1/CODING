import { Route, Routes } from "react-router-dom";
import React from 'react'
import Mbtipage from './page/mbtipage';
import { Preference } from './page/preference';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mbtipage/>}/>;
        <Route path="/preference" element={<Preference/>}/>
      </Routes>
    </div>
  )
}

export default App