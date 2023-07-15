
import './App.css';
import { useForm } from 'react-hook-form';
import {useEffect, useEffent,useState} from 'react';
import InfoTable  from './pages/InfoTable';
import React from 'react';
import NavBar from './Navbar';
import Home from './pages/Home';
import Handover from './pages/Handover';
import { Route,Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UpdatePatientInfo from './pages/UpdatePatientInfo';


function App() {
    return (
        <div>
          <NavBar />
          
          <div className="bg-slate-300 px-10">
            <div className="flex justify-center ">
                <div className="bg-yellow-100 w-full lg:w-5/6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/InfoTable" element={<InfoTable />} />
                    <Route path="/Handover" element={<Handover />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/UpdatePatientInfo" element={<UpdatePatientInfo />} />
                </Routes>
                </div>
            </div>
          </div>
        </div>
    );
}

export default App;
