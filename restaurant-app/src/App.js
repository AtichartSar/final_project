import React, { useState } from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import PrivateRoutes from './components/private-routes/PrivateRoutes';
import { BrowserRouter } from 'react-router-dom';
import localStorage from './services/localStorageService'
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import {
setUser,getUser
} from './features/user/userSlice'


function App() {
  const dispatch= useDispatch()
  // const [role, setRole] = useState()
  dispatch(setUser(localStorage.getRole()))

  // console.log("roleCheck",role);
  return (
    <div className="App">
      <BrowserRouter>
        <PrivateRoutes  />
      </BrowserRouter>
    </div>
  )
}

export default App;
